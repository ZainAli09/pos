<template>
  <aside class="z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0">
    <div class="py-4 text-gray-500">
      <Link class="ml-6 text-lg font-bold text-gray-800" :href="route('dashboard')">
        Windmill
      </Link>

      <ul class="mt-6">
        <li v-if="$page.props.user.permissions.includes('dashboard')" class="relative px-6 py-3">
          <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
            <template #icon>
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </template>
            Dashboard
          </NavLink>
        </li>

        <li v-if="$page.props.user.permissions.includes('main.addings.module')" class="relative px-6 py-3">
          <NavLink :href="route('products.index')" :active="route().current('products.index')">
            <template #icon>
              <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"/>
              </svg>
            </template>
            Add Product
          </NavLink>
        </li>


        
        <li v-if="$page.props.user.permissions.includes('main.addings.module')" class="relative px-6 py-3">
          <button @click="showingMainAddings = !showingMainAddings"
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              aria-haspopup="true">
                <span class="inline-flex items-center">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                    <span class="ml-4">Main Addings</span>
                </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
            <ul v-show="showingMainAddings" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                
                <li class="relative px-6 py-3">
                  <NavLink :href="route('companies.index')" :active="route().current('companies.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Companies
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('vendors.index')" :active="route().current('vendors.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Vendors
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('employees.index')" :active="route().current('employees.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Employees
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('customers.index')" :active="route().current('customers.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Customers
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('categories.index')" :active="route().current('categories.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Categories
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('subcategories.index')" :active="route().current('subcategories.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Sub-Categories
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('expenses.index')" :active="route().current('expenses.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Expenses
                  </NavLink>
                </li>

                <li class="relative px-6 py-3">
                  <NavLink :href="route('zones.index')" :active="route().current('zones.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Zones
                  </NavLink>
                </li>
                
            </ul>
        </li>
        <li v-if="$page.props.user.permissions.includes('invoices.module')" class="relative px-6 py-3">
          <button @click="showingInvoices = !showingInvoices"
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              aria-haspopup="true">
                <span class="inline-flex items-center">
                    <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg> -->
                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M6 1v4a1 1 0 0 1-1 1H1m8-2h3M9 7h3m-4 3v6m-4-3h8m3-11v16a.969.969 0 0 1-.932 1H1.934A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.829 1h8.239A.969.969 0 0 1 15 2ZM4 10h8v6H4v-6Z"/>
                    </svg>
                    
  
                    <span class="ml-4">Invoices</span>
                </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
            <ul v-show="showingInvoices" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('purchaseinvoices.index')" :active="route().current('purchaseinvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Purchase 
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('purchasereturninvoices.index')" :active="route().current('purchasereturninvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Purchase Return 
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('saleinvoices.index')" :active="route().current('saleinvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Sale 
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('salereturninvoices.index')" :active="route().current('salereturninvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Sale Return 
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('wsinvoices.index')" :active="route().current('wsinvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Whole Sale
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <!-- <a class="w-full" href="#">Purchase Invoices</a> -->
                <NavLink :href="route('wsreturninvoices.index')" :active="route().current('wsreturninvoices.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  W S Return
                </NavLink>
              </li>
            </ul>
        </li>

        <li v-if="$page.props.user.permissions.includes('vouchers.module')" class="relative px-6 py-3">
          <button @click="showingTwoLevelMenu = !showingTwoLevelMenu"
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              aria-haspopup="true">
                <span class="inline-flex items-center">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                    <span class="ml-4">Vouchers</span>
                </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
            <ul v-show="showingTwoLevelMenu" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              
                <NavLink :href="route('cashreceivedvouchers.create')" :active="route().current('cashreceivedvouchers.create')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Cash Received
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              
              <NavLink :href="route('cashpaymentvouchers.create')" :active="route().current('cashpaymentvouchers.create')">
                <template #icon>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </template>
                Cash Payment
              </NavLink>
            </li>
            </ul>
        </li>

        <li v-if="$page.props.user.permissions.includes('reports.module')" class="relative px-6 py-3">
          <button @click="showingReports = !showingReports"
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              aria-haspopup="true">
                <span class="inline-flex items-center">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                    <span class="ml-4">Reports</span>
                </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
            <ul v-show="showingReports" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                
                  <NavLink :href="route('reports.retailProductList')" :active="route().current('reports.retailProductList')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Retail Product
                  </NavLink>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                
                <NavLink :href="route('reports.wsProductList')" :active="route().current('reports.wsProductList')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Whole Sale Product
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">                
                <NavLink :href="route('reports.accountPayable')" :active="route().current('reports.accountPayable')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Account Payable
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.accountReceivable')" :active="route().current('reports.accountReceivable')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Account Receivable
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.recovery')" :active="route().current('reports.recovery')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Recovery
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.purchase')" :active="route().current('reports.purchase')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Purchase Register
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.sale')" :active="route().current('reports.sale')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Sale Register
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.stock')" :active="route().current('reports.stock')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Stock Register
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <NavLink :href="route('reports.profit')" :active="route().current('reports.profit')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Profit Register
                </NavLink>
              </li>
            </ul>
        </li>
        <li v-if="$page.props.user.permissions.includes('ledger')" class="relative px-6 py-3">
          <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
            <template #icon>
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </template>
            Cash Book
          </NavLink>
        </li>
        <li v-if="$page.props.user.permissions.includes('ledger')" class="relative px-6 py-3">
          <NavLink :href="route('ledger.index')" :active="route().current('ledger.index')">
            <template #icon>
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </template>
            Ledger
          </NavLink>
        </li>
        <li v-if="$page.props.user.permissions.includes('user.management.module')" class="relative px-6 py-3">
          <button @click="showingUserManagementMenu = !showingUserManagementMenu"
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              aria-haspopup="true">
                <span class="inline-flex items-center">
                  <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 8C5.80777 8 5.13108 7.79473 4.55551 7.41015C3.97993 7.02556 3.53133 6.47893 3.26642 5.83939C3.00152 5.19985 2.9322 4.49612 3.06725 3.81719C3.2023 3.13825 3.53564 2.51461 4.02513 2.02513C4.51461 1.53564 5.13825 1.2023 5.81719 1.06725C6.49612 0.932205 7.19985 1.00152 7.83939 1.26642C8.47893 1.53133 9.02556 1.97993 9.41015 2.55551C9.79473 3.13108 10 3.80777 10 4.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.5 17H1V15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.5 11H18.38C18.2672 10.5081 18.0714 10.0391 17.801 9.613L18.601 8.818C18.6947 8.72424 18.7474 8.59708 18.7474 8.4645C18.7474 8.33192 18.6947 8.20476 18.601 8.111L17.894 7.404C17.8002 7.31026 17.6731 7.25761 17.5405 7.25761C17.4079 7.25761 17.2808 7.31026 17.187 7.404L16.392 8.204C15.9647 7.93136 15.4939 7.73384 15 7.62V6.5C15 6.36739 14.9473 6.24021 14.8536 6.14645C14.7598 6.05268 14.6326 6 14.5 6H13.5C13.3674 6 13.2402 6.05268 13.1464 6.14645C13.0527 6.24021 13 6.36739 13 6.5V7.62C12.5081 7.73283 12.0391 7.92863 11.613 8.199L10.818 7.404C10.7242 7.31026 10.5971 7.25761 10.4645 7.25761C10.3319 7.25761 10.2048 7.31026 10.111 7.404L9.404 8.111C9.31026 8.20476 9.25761 8.33192 9.25761 8.4645C9.25761 8.59708 9.31026 8.72424 9.404 8.818L10.204 9.618C9.9324 10.0422 9.73492 10.5096 9.62 11H8.5C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V12.5C8 12.6326 8.05268 12.7598 8.14645 12.8536C8.24021 12.9473 8.36739 13 8.5 13H9.62C9.73283 13.4919 9.92863 13.9609 10.199 14.387L9.404 15.182C9.31026 15.2758 9.25761 15.4029 9.25761 15.5355C9.25761 15.6681 9.31026 15.7952 9.404 15.889L10.111 16.596C10.2048 16.6897 10.3319 16.7424 10.4645 16.7424C10.5971 16.7424 10.7242 16.6897 10.818 16.596L11.618 15.796C12.0422 16.0676 12.5096 16.2651 13 16.38V17.5C13 17.6326 13.0527 17.7598 13.1464 17.8536C13.2402 17.9473 13.3674 18 13.5 18H14.5C14.6326 18 14.7598 17.9473 14.8536 17.8536C14.9473 17.7598 15 17.6326 15 17.5V16.38C15.4919 16.2672 15.9609 16.0714 16.387 15.801L17.182 16.601C17.2758 16.6947 17.4029 16.7474 17.5355 16.7474C17.6681 16.7474 17.7952 16.6947 17.889 16.601L18.596 15.894C18.6897 15.8002 18.7424 15.6731 18.7424 15.5405C18.7424 15.4079 18.6897 15.2808 18.596 15.187L17.796 14.392C18.0686 13.9647 18.2662 13.4939 18.38 13H19.5C19.6326 13 19.7598 12.9473 19.8536 12.8536C19.9473 12.7598 20 12.6326 20 12.5V11.5C20 11.3674 19.9473 11.2402 19.8536 11.1464C19.7598 11.0527 19.6326 11 19.5 11ZM14 14.5C13.5055 14.5 13.0222 14.3534 12.6111 14.0787C12.2 13.804 11.8795 13.4135 11.6903 12.9567C11.5011 12.4999 11.4516 11.9972 11.548 11.5123C11.6445 11.0273 11.8826 10.5819 12.2322 10.2322C12.5819 9.8826 13.0273 9.6445 13.5123 9.54804C13.9972 9.45157 14.4999 9.50108 14.9567 9.6903C15.4135 9.87952 15.804 10.2 16.0787 10.6111C16.3534 11.0222 16.5 11.5055 16.5 12C16.5 12.663 16.2366 13.2989 15.7678 13.7678C15.2989 14.2366 14.663 14.5 14 14.5Z" fill="currentColor"/>
                  </svg>
    
                    <span class="ml-4">User Managment</span>
                </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
            <ul v-show="showingUserManagementMenu" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <NavLink :href="route('users.index')" :active="route().current('users.index')">
                    <template #icon>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </template>
                    Users
                  </NavLink>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              
                <NavLink :href="route('roles.index')" :active="route().current('roles.index')">
                  <template #icon>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </template>
                  Roles
                </NavLink>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              
              <NavLink :href="route('permissions.index')" :active="route().current('permissions.index')">
                <template #icon>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </template>
                Permissions
              </NavLink>
            </li>
            </ul>
        </li>
        <li class="relative px-6 py-3">
          <NavLink :href="route('about')" :active="route().current('about')">
            <template #icon>
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </template>
            Contact Details
          </NavLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import NavLink from '@/Components/NavLink.vue'
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue'

export default {
  components: {
    NavLink,
    Link,
  },

  setup() {
    let showingTwoLevelMenu = ref(false)
    let showingInvoices = ref(false)
    let showingReports = ref(false)
    let showingMainAddings = ref(false)
    let showingUserManagementMenu = ref(false)



    return {
      showingTwoLevelMenu, showingInvoices, showingMainAddings, showingReports, showingUserManagementMenu
    }
  },
}
</script>