<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    // user: user,
    name: user.name,
    email: user.email,
    company_name: user.company_name,
    reg_no: user.reg_no,
    contact_person: user.contact_person,
    business_nature: user.business_nature,
    mobile_no: user.mobile_no,
    phone_no: user.phone_no,
    other_phone: user.other_phone,
    website: user.website,
    address: user.address,
    logo: user.logo,
    company_logo: user.company_logo
    
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>

            <p class="mt-1 text-sm text-gray-600">
                Update your account's profile information.
            </p>
        </header>

       
        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-4" enctype="multipart/form-data">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="company_name" value="Company Name" />

                        <TextInput
                            id="company_name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.company_name"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.company_name" />
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="reg_no" value="Registration Number" />

                        <TextInput
                            id="reg_no"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.reg_no"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.reg_no" />
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="contact_person" value="Contact Person" />

                        <TextInput
                            id="contact_person"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.contact_person"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.contact_person" />
                    </div>
                </div>

                <!-- Repeat the above structure for the remaining fields -->
                <!-- Adjust the width classes and field names as needed -->

            </div>

            <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="business_nature" value="Business Nature" />

                        <TextInput
                            id="business_nature"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.business_nature"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.business_nature" />
                    </div>
                </div>

                

                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="mobile_no" value="Mobile Number" />

                        <TextInput
                            id="mobile_no"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.mobile_no"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.mobile_no" />
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="phone_no" value="Phone Number" />

                        <TextInput
                            id="phone_no"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.phone_no"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.phone_no" />
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="other_phone" value="Other Phone" />

                        <TextInput
                            id="other_phone"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.other_phone"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.other_phone" />
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 px-4">
                    <div>
                        <InputLabel for="website" value="Website" />

                        <TextInput
                            id="website"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.website"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.website" />
                    </div>
                </div>
            </div>
            <div class="w-full ">
                    <div>
                        <InputLabel for="address" value="Address" />

                        <TextInput
                            id="address"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.address"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.address" />
                    </div>
                </div>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2  px-4">
                    <div>
                        <InputLabel for="logo" value="Logo" />

                        <TextInput
                            id="logo"
                            type="file"
                            class="mt-1 block w-full"
                            v-model="form.logo"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.logo" />
                    </div>
                </div>

                <div class="w-full sm:w-1/2  px-4">
                    <div>
                        <InputLabel for="company_logo" value="Company Logo" />

                        <TextInput
                            id="company_logo"
                            type="file"
                            class="mt-1 block w-full"
                            v-model="form.company_logo"
                            autocomplete="off"
                        />

                        <InputError class="mt-2" :message="form.errors.company_logo" />
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>


    </section>
</template>
