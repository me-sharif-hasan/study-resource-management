function youtube_parser(url) {
    var regExp = /(?:\?v=|\/videos\/|\/embed\/|\/v\/|\/e\/|watch\?v=|youtu.be\/|youtube.com\/user\/\w+\/|user\/\w+\/|playlist\?list=)([a-zA-Z0-9_-]{11})|(?:\?list=)([a-zA-Z0-9_-]+)(?=&|$)|([a-zA-Z0-9_-]{11})/;

    var match = url.match(regExp);

    if (match) {
        var result = {};

        if (match[1]) {
            result.videoId = match[1];
        }

        if (match[2]) {
            result.playlistId = match[2];
        } else if (url.includes("list=")) {
            var playlistMatch = url.match(/list=([a-zA-Z0-9_-]+)/);
            if (playlistMatch) {
                result.playlistId = playlistMatch[1];
            }
        }

        return result;
    } else {
        return false;
    }
}

export default youtube_parser;
