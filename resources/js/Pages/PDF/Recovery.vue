<template>

    <Head title="Recovery" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <button class="btn btn-primary" @click="downloadPDF">Download PDF</button>
        
    <div id="pdf-content">
        <div class="row">
            <div class="col heading">
                <h2>{{  user.company_name  }}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col heading">
                <h4>{{  user.address  }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col heading">
                <h4>{{  user.mobile_no  }}</h4>
            </div>
        </div>

        <div class="row">
            <div class="col heading">
                <h2>Recovery Report</h2>
            </div>
        </div>

        <div class="flex space-x-4" >
            <div class="w-1/8">
                <p>Zone:</p>
            </div>
            <div class="w-1/6">
                <p>{{  zone  }}</p>
            </div>
            <div class="w-1/8">
                <p>From Date:</p>
            </div>
            <div class="w-1/6">
                <p>{{  formatDate(start_date)  }}</p>
            </div>
            <div class="w-1/8">
                <p>To Date:</p>
            </div>
            <div class="w-1/6">
                <p>{{  formatDate(end_date)  }}</p>
            </div>
        </div>
        
        <table class="w-full whitespace-no-wrap">
            <thead>
                <tr
                    class="text-xs font-semibold tracking-wide text-left text-black-500 uppercase bg-gray-300 border-b">
                    <th class="px-2 py-3">Sr</th>
                    <th class="px-2 py-3">Customer ID</th>
                    <th class="px-5 py-3">Customer Name</th>
                    <th class="px-2 py-3">Balance</th>
                    <th class="px-2 py-3">Last Received Amount</th>
                    <th class="px-2 py-3">Receiving Date</th>
                    <th class="px-2 py-3">Remarks</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y"  >
                <tr  class="text-gray-700" v-for="(receivedVoucher,index) in receivedVouchers" >
            <!-- {{ receivedVoucher }} -->
                   
                    <td class="px-2 py-1 text-sm">
                        {{ index+1 }}
                    </td>
                    <td class="px-2 py-1 text-sm">
                        {{ receivedVoucher.transactionable.customer.id }}
                    </td>                
                    <td class="px-2 py-1 text-sm">                     
                        {{ receivedVoucher.transactionable.customer.name }}
                      
                         
                    </td>                   
                    <td class="px-2 py-1 text-sm">
                          {{ customerBalances[receivedVoucher.transactionable.customer.id ] }}
                        
                    </td>
                    <td class="px-2 py-1 text-sm">
                        {{ receivedVoucher.transactionable.total_amount }}
                        
                        
                    </td>
                    <td class="px-2 py-1 text-sm">
                        {{ formatDate(receivedVoucher.transactionable.sale_date) }}
                           
                        
                    </td>
                    <td class="px-2 py-1 text-sm">
                        
                    </td>
                </tr>
                
            </tbody>
        </table>
        <br />

       
        
      
        <div class="flex space-x-4 absolute bottom-0 w-full" id="ledger-footer">
            <div class="w-1/2 ">
                <p>Developed By Reylma Solutions +92-333-6005212</p>
            </div>
            <div class="w-1/4">
                <p>Date: </p>
            </div>
            <div class="w-1/4">
                <p>Gen By: </p>
            </div>
            
        </div>
    </div>
    

</template>


<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import Pagination from '@/Components/Pagination.vue';
    import html2pdf from 'html2pdf.js';
    import moment from 'moment';

    import {
        Head,
        Link, usePage
    } from '@inertiajs/vue3';


    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Pagination,
            Link
        },
        props:{
            receivedVouchers: Array, start_date: Date, end_date: Date, zone: Object, customerBalances: Array
        },
       
        data(){
            return{
              
                user: usePage().props.auth.user,
                
            }
        },
       
        methods: {
            formatDate(date) {
                if (date) {
                const formattedDate = moment(date).format('DD-MM-YYYY'); // Format the date using Moment.js
                return formattedDate;
                }
                return '';
            },
        
            downloadPDF() {
                // console.log('downloadPDF called'); // Check if the method is called
                const element = document.getElementById('pdf-content');

                try {
                    
                    const pdfOptions = {
                    margin: 5,
                    filename: 'WS-product-list.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
                
                html2pdf()
                    .from(element)
                    .set(pdfOptions)
                    .save();
                } catch (error) {
                    console.error('Error in downloadPDF:', error);
                }
                
                
            }
        }

    }

</script>
<style>
    body {
        margin: 0px;
        padding: 0px;
    }

    .heading {
        text-align: center;
    }
    #ledger-footer {
       border-top: 2px solid black;
    }

</style>
