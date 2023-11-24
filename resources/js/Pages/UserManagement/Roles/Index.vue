<template>

    <Head title="Roles" />

    <AuthenticatedLayout>
        <template #header>
            Roles
        </template>

        <div class="p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6">
            <div class="px-4 py-2 -mx-3 ">
                <div class="mx-3">
                    <Link class="ml-6 text-lg font-bold text-gray-800" :href="route('roles.create')">
                        <button class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600">New</button>
                    </Link>
                </div>
            </div>
            <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                <th class="px-4 py-3">Sr</th>
                                <th class="px-4 py-3">Permission</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
                <div
                    class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9">
                    
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
            
        }
    }

</script>
