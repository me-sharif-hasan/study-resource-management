<?php

namespace App\Http\Controllers\Courses;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Materials;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\Style\Font;
use PhpOffice\PhpWord\Writer\PDF;
use PhpOffice\PhpWord\Writer\PDF\DomPDF;

class MaterialController extends Controller
{
    public function materialUpload(){
        try {
            $files = request()->file('files');
            $class_id=request()->post()['class_id'];
            $uid=Classes::find($class_id)->course->user->id;
            if($uid!=Auth::user()->id) throw new \Exception('You are not authenticated to perform this operation!');
            foreach ($files as $f) {
//                echo $f->getClientOriginalName() . "\n";
                $filename=$f->getClientOriginalName().uniqid('_unique_').'.'.$f->getClientOriginalExtension();
                $path='materials/'.uniqid('_');

                $fileUrl=$path.'/'.$filename;

                $material=new Materials();
                $material->title=$f->getClientOriginalName();
                $material->type=$f->getMimeType();
                $material->url=$fileUrl;
                $material->date=today();
                $material->is_deleted=false;
                $material->access_level=0;
                $material->class_id=$class_id;
                try {
                    $f->move(public_path($path), $filename);
                    $material->save();
                }catch (\Throwable $e){
                    throw new \Exception("Error Uploading file");
                }
            }
            return [
                'status' => 'ok',
                'message' => count($files) . " files uploaded"
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something wrong happened in server side.'.$e->getMessage()
            ];
        }
    }

    public function addYoutubeVideo(){
        try{
            $data=request()->json()->all();
            $url=$data['url'];
            $class_id=$data['class_id'];
            $class=Classes::find($class_id);
            $uid=$class->course->user->id;

            if($uid!=Auth::user()->id){
                return [
                    'status'=>'error',
                    'message'=>'You do not own this class! error code: 0x01'
                ];
            }

            $metadata=json_decode(file_get_contents('https://www.youtube.com/oembed?url='.$url),1);
            $type='youtube/video';
            if(str_contains($metadata['html'], 'videoseries')){
                $type='youtube/playlist';
            }
            $material=new Materials();
            $material->thumb=$metadata['thumbnail_url'];
            $material->title=$metadata['title'];
            $material->url=$url;
            $material->is_deleted=false;
            $material->access_level=0;
            $material->class_id=$class_id;
            $material->date=today();
            $material->type=$type;
            $material->save();
            return [
                'status'=>'ok',
                'message'=>'Youtube video '.$metadata['title'].' added successfully'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something went wrong 0x02'
            ];
        }
    }

    public function readMaterial($material_id){
        try{
            $material=Materials::find($material_id);
            if($material->itsClass->course->user_id==Auth::user()->id){

                if(str_contains($material->type,'youtube')){
                    return $material;
                }

                $file=public_path($material->url);
                $mime= explode('/',$material->type);

                $ext=File::extension(public_path($material->url));
                $headers=[
                    'content-size'=>File::size($file),
                    'content-type'=>'unknown'
                ];
                if($ext=='docx'||$ext=='pdf'||$ext=='doc'||$ext=='pptx') $headers['content-type']='application/pdf';
                else if($mime[0]=='image') $headers['content-type']=$material->type;
                else if($mime[0]=='text') $headers['content-type']='text/plain';

                if(request()->get('metadata')){
                    $material->url=route('read-material',$material->id);
                    $material->type=$headers['content-type'];
                    return $material;
                }
                if($mime[0]=='application'){
                    if($ext=='docx'||$ext=='doc'||$ext=='pptx') return $this->wordToPdf($material);
                    else if($ext=='pdf'){
                        return Response::file($file,$headers);
                    }else{
                        return Response::file($file,$headers);
                    }
                }else if($mime[0]=='image'){
                    return Response::file($file,$headers);
                }else if($mime[0]=='text'){
                    return Response::file($file,$headers);
                }else{
                    return Response::file($file,$headers);
                }
            }else{
                throw new \Exception('You do not own this material');
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something wrong happened from our side '
            ];
        }
    }

    private function wordToPdf(&$material){
        $file=public_path()."/".$material->url;
        $headers=[
            'content-type'=>'application/pdf',
            'content-size'=>File::size($file)
        ];
        $domPdfPath = realpath(base_path().'/vendor/dompdf/dompdf');
        \PhpOffice\PhpWord\Settings::setPdfRendererPath($domPdfPath);
        \PhpOffice\PhpWord\Settings::setPdfRendererName('DomPDF');
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        $phpword=IOFactory::load($file,$ext=='docx'?'Word2007':'MsDoc');
        $phpword->addFontStyle('body',array('name' => 'DejaVu Sans', 'size' => 10));
        $pdfWriter=IOFactory::createWriter($phpword,"PDF");
        $save="temp/".uniqid().".pdf";
        $path=storage_path($save);
        $pdfWriter->save($path);
        return Response::download($path,$material->title.".pdf",$headers)->deleteFileAfterSend();
    }

    public function update(){
        try {
            $data = request()->json()->all();
            $id=$data['id'];
            $material=Materials::find($id);
            $uid=$material->itsClass->course->user->id;
            if($uid!=Auth::user()->id){
                return [
                    'status'=>'error',
                    'message'=>'You do not own this material'
                ];
            }
            if(isset($data['note'])) $material->note=$data['note'];
            if(isset($data['date'])) $material->note=$data['date'];
            if(isset($data['title'])) $material->note=$data['title'];

            $material->save();
            return [
                'status'=>'ok',
                'message'=>'Material updated successfully'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something wrong happened. code: 0x03'
            ];
        }
    }

    public function delete(){
        try{
            $data=request()->json()->all();
            $id=$data['id'];
            $material=Materials::find($id);
            if($material->itsClass->course->user->id!=Auth::user()->id) throw new \Exception('Error');
            $material->delete();
            return [
                'status'=>'success',
                'message'=>'Resource deleted!'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Error deleting material'
            ];
        }
    }

    public function saveNote(){
        try{
            $data=request()->json()->all();
            $note=$data['note'];
            $class_id=$data['class_id'];
            $uid=Classes::find($class_id)?->course?->user?->id;
            if($uid!=Auth::id()) throw new \Exception("You do not own this class");
            if($note==""||$note==null) throw new \Exception("Note is null");
            $material=new Materials();
            $material->text_content=$note;
            $material->title=substr(strip_tags($note),0,10).'...'.substr(strip_tags($note),-6);
            $material->is_deleted=false;
            $material->access_level=0;
            $material->class_id=$class_id;
            $material->date=today();
            $material->type='text/html';
            $material->save();
            return [
                'status'=>'ok',
                'message'=>'Class note added successfully'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something went wrong 0x09'.$e->getMessage()
            ];
        }
    }
}
