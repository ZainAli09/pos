<template>

    <Head title="Products" />

    <AuthenticatedLayout>
        <template #header>
            Products
        </template>

        <div class="p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6">
            <!-- <div class="inline-flex overflow-hidden mb-4 w-full bg-white rounded-lg shadow-md">
                <div class="flex justify-center items-center w-12 bg-blue-500">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                        </path>
                    </svg>
                </div> -->

                <div class="px-4 py-2-mx-3 ">
                    <div class="mx-3">
                        <Link class="ml-6 text-lg font-bold text-gray-800" :href="route('products.create')">
                            <button class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600">Add New Product</button>
                        </Link>
                    </div>
                </div>
            <!-- </div> -->

            <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                <th class="px-4 py-3">Product ID</th>
                                <th class="px-4 py-3">Company</th>
                                <!-- <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Sub Category</th> -->

                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Name 2</th>
                                <!-- <th class="px-4 py-3">Description</th> -->
                                <th class="px-4 py-3">Purchase Rate</th>
                                <th class="px-4 py-3">Sale Rate</th>
                                <th class="px-4 py-3">W/S Rate</th>

                                <!-- <th class="px-4 py-3">Discount Amount</th>
                                <th class="px-4 py-3">Discount %</th> -->
                                <th class="px-4 py-3">Rack No</th>
                                <th class="px-4 py-3">Expiry Date</th>
                                <th class="px-4 py-3">Expiry Alert</th>
                                <th class="px-4 py-3">Action</th>

                                <th class="px-4 py-3">Status</th>
                                
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            <tr v-for="(product, index) in products.data" :key="product.id"
                                class="text-gray-700">
                                <td class="px-4 py-3 text-sm">
                                    {{ product.id }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.company.name }}
                                </td>
                                <!-- <td class="px-4 py-3 text-sm">
                                    {{ product.category.name }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.subcategory.name }}
                                </td> -->
                                <td class="px-4 py-3 text-sm">
                                    {{ product.name }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.product_name_two }}
                                </td>
                                <!-- <td class="px-4 py-3 text-sm">
                                    {{ product.desc }}
                                </td> -->
                                <td class="px-4 py-3 text-sm">
                                    {{ product.purchase_rate }}
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    {{ product.sale_rate }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.whole_sale_rate }}
                                </td>
                                <!-- <td class="px-4 py-3 text-sm">
                                    {{ product.discount }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.discount_percent }}
                                </td> -->
                                <td class="px-4 py-3 text-sm">
                                    {{ product.rack_no }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.expiry_date }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ product.expiry_alert_days }}
                                </td>
                                <td v-if="$page.props.user.permissions.includes('product.edit')" class="px-4 py-3 text-sm">
                                    <a :href="route('products.edit', product.id)"> <svg class="w-[21px] h-[21px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"/>
                                    </svg></a>
                                </td>
                                <td v-if="$page.props.user.permissions.includes('product.edit')" class="px-4 py-3 text-sm">
                                    <label class="relative inline-flex items-center mr-5 cursor-pointer">
                                        <input type="checkbox"  class="sr-only peer" :checked="product.status === 1" @change="updateStatus(product.id, index)">
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                        
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div
                    class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9">
                    <pagination :links="products.links" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import Pagination from '@/Components/Pagination.vue';

    import {
        Head, Link
    } from '@inertiajs/vue3';


    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Pagination,
            Link
        },

        props: {
            products: Object,
        },
        data(){
            return{
                formData:{
                  
                }
            }
        },
        methods: {
            updateStatus(id,index){
                axios.post(route('updateStatus', { id: id, model: 'Product' }))
                .then(response => {
                this.products.data[index].status = response.data.status;
               

                });
            }
        },
   
    }

</script>
