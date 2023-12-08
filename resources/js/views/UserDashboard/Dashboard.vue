<template>
    <div class="container-fluid">
        <!--  Row 1 -->
        <div class="row">
            <canvas id="myChart"></canvas>
        </div>
<!--        <div class="row mt-5" v-if="user&&user.id===2">-->

<!--            <button @click="createTokens" class="btn btn-primary">Create 10 tokens</button>-->

<!--            <table v-if="tokens">-->
<!--                <tr class="border-b-2">-->
<!--                    <td class="border-l text-center">ID</td>-->
<!--                    <td class="border-l text-center">Token</td>-->
<!--                    <td class="border-l text-center">Value</td>-->
<!--                </tr>-->
<!--                <tr class="border-b-2" v-for="token in tokens">-->
<!--                    <td class="border-l text-center">{{token.id}}</td>-->
<!--                    <td class="border-l text-center">{{token.token}}</td>-->
<!--                    <td class="border-l text-center">{{token.value}}</td>-->
<!--                </tr>-->
<!--            </table>-->
<!--        </div>-->
    </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

    onMounted(()=>{
        let tag=document.createElement('script');
        tag.src='https://cdn.jsdelivr.net/npm/chart.js';
        document.head.appendChild(tag);
        getTokens();
    });



    let createTokens=()=>{
        axios.get('/user/ct').then((res)=>{
            getTokens();
        });
    }

    let tokens=ref({});
    let getTokens=()=>{
        axios.get('/user/gt').then((res)=>{
            tokens.value=res.data;
        });
    }

    let user=ref();
    let getAnalytics=()=>{
        axios.get('/user/api/profile').then((res)=>{
            user.value=res.data;
        })
        axios.get('/user/api/analytics').then((res)=>{
            let data=res.data.message;

            let courses=[];
            let time=[];
            let classCount=[]
            data.forEach((course)=>{
                courses.push(course.title)
                time.push(course.total_reading)
                classCount.push(course.classes.length);
            });
            console.log(courses,time)
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: courses,
                    datasets: [{
                        label: 'Total Reading Time in Minutes',
                        data: time,
                        borderWidth: 1
                    },
                        {
                            label: 'Number of Class',
                            data: classCount
                        }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        });
    }

   onMounted(()=>{
       getAnalytics()
   })
</script>
