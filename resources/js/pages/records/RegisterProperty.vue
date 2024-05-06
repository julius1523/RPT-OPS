<template>
    <v-container fluid>
        <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>
        <v-dialog v-model="prevDialog" max-width="1050px" scrollable @input="resetDialog">
            <v-card class="rounded-lg">
                <v-toolbar class="p-0" dense flat>
                    <span class="grey--text text--darken-3 text-subtitle-2 font-weight-bold text-truncate">
                        {{ this.previewName }}</span>
                    <v-spacer></v-spacer>
                    <v-btn fab depressed x-small @click="closePrevDialog" color="blue-grey lighten-5">
                        <v-icon size="20" color="grey darken-2">mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider class="my-0"></v-divider>
                <v-card-text class="p-0">
                    <v-img class="border" v-if="this.previewImage" :src="previewImage" contain height="100%"
                        width="100%"></v-img>
                    <!-- <h6 class="text-center" v-if="this.previewImage === '/img/blank.svg'">No Preview Available</h6> -->
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-card class="pa-4 rounded-xl shadow">
            <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3">Select
                Option</v-card-title>
            <v-card-subtitle class="pt-0 pl-0 text-sm-caption text-md-body-2 text-left">Do you have your previous
                official
                receipt (OR)?</v-card-subtitle>
            <v-item-group v-model="optionType" class="mx-auto">
                <div class="d-flex">
                    <v-item v-slot="{ active, toggle }" value="with">
                        <v-card flat :dark="active ? true : false" :color="active ? 'primary' : ''"
                            class="rounded-xl pa-1" @click="toggle" style="border: 0.20rem solid #1976d2; margin-right: 8px"
                            width="100%">
                            <v-row no-gutters>
                                <v-col cols="12" sm="3" md="4" class="my-auto text-center pt-2 py-sm-2">
                                    <v-icon :color="active ? '' : 'primary'" :right="$vuetify.breakpoint.smAndUp"
                                        style="font-size: clamp(30px, 8vw, 110px)">mdi-receipt-text-check-outline</v-icon>
                                </v-col>
                                <v-col cols="12" sm="9" md="8" class="my-auto">
                                    <v-card-title
                                        class="text-break text-md-subtitle-1 text-body-2 font-weight-bold px-0"
                                        :class="{ 'text-center justify-center': $vuetify.breakpoint.xsOnly }">
                                        Yes, I do
                                    </v-card-title>
                                    <v-card-subtitle class="text-break px-0"
                                        :class="{ 'text-center': $vuetify.breakpoint.xsOnly }">
                                        (With Previous OR)
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-item>
                    <v-item v-slot="{ active, toggle }" value="without">
                        <v-card flat :dark="active ? true : false" :color="active ? 'primary' : ''"
                            class="rounded-xl pa-1" @click="toggle" style="border: 0.20rem solid #1976d2; margin-left: 8px"
                            width="100%">
                            <v-row no-gutters>
                                <v-col cols="12" sm="3" md="4" class="my-auto text-center pt-2 py-sm-2">
                                    <v-icon :color="active ? '' : 'primary'" :right="$vuetify.breakpoint.smAndUp"
                                        style="font-size: clamp(30px, 8vw, 110px)">mdi-receipt-text-remove-outline</v-icon>
                                </v-col>
                                <v-col cols="12" sm="9" md="8" class="my-auto">
                                    <v-card-title
                                        class="text-break text-md-subtitle-1 text-body-2 font-weight-bold px-0"
                                        :class="{ 'text-center justify-center': $vuetify.breakpoint.xsOnly }">
                                        No, I don't
                                    </v-card-title>
                                    <v-card-subtitle class="text-break px-0"
                                        :class="{ 'text-center': $vuetify.breakpoint.xsOnly }">
                                        (Without Previous OR)
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-item>
                </div>
            </v-item-group>
        </v-card>

        <v-card class="pa-4 rounded-xl shadow mt-3" v-if="selectOption">
            <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3">Register
                Property</v-card-title>
            <v-card-subtitle class="pt-0 pl-0 text-sm-caption text-md-body-2 text-left">Fill out the
                fields to
                register a property</v-card-subtitle>
            <v-form ref="form" fast-fail @submit.prevent="save">
                <v-row dense>
                    <v-col cols="12" :sm="withOption ? '6' : '12'" :md="withOption ? '8' : '12'">
                        <v-card flat>
                            <v-row dense>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '6' : '4'">
                                    <v-text-field v-model="form.td_no" filled
                                        :rules="isFormSubmitted && withoutOption ? rules.td_no : []" dense
                                        :label="withOption ? 'Tax Dec. Number (Optional)' : 'Tax Dec. Number'"
                                        :prefix="isTextFieldFocused ? 'AA-' : ''" @focus="setTextFieldFocused(true)"
                                        @blur="setTextFieldFocused(false)" clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '12' : '4'"
                                    v-if="withoutOption">
                                    <v-text-field v-model="form.pin" filled :rules="isFormSubmitted ? rules.pin : []"
                                        dense label="PIN" clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '12' : '4'"
                                    v-if="withoutOption">
                                    <v-text-field v-model="form.last_orno" filled
                                        :rules="isFormSubmitted ? rules.last_orno : []" dense
                                        label="Last Official Receipt Number" clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '12' : '4'"
                                    v-if="withoutOption">
                                    <v-text-field v-model="form.last_amt_paid" filled
                                        :rules="isFormSubmitted ? rules.last_amt_paid : []"
                                        :dense="$vuetify.breakpoint.smAndDown" label="Amount Paid" clearable
                                        type="number"></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '6' : '4'">
                                    <v-text-field v-model="form.relationship" filled dense
                                        :rules="isFormSubmitted && withoutOption ? rules.relationship : []"
                                        :label="withOption ? 'Relationship to Owner (Optional)' : 'Relationship to Owner'"
                                        clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '6' : '4'">
                                    <v-text-field v-model="form.email" filled dense
                                        :rules="isFormSubmitted ? rules.email : []" label="Email Address"
                                        clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '6' : '4'">
                                    <v-text-field v-model="form.mobileno" filled dense
                                        :rules="isFormSubmitted ? rules.mobileno : []" label="Mobile No."
                                        clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" :sm="withOption ? '12' : '6'" :md="withOption ? '6' : '4'">
                                    <v-select v-model="form.property_type"
                                        :rules="isFormSubmitted ? rules.property_type : []" label="SOA (Property Type)"
                                        dense filled
                                        :items="['Land', 'Building', 'Machinery', 'Land & Building']"></v-select>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <template v-if="!withoutOption">
                        <v-col cols="12" sm="6" md="4" align="center" class="order-sm-last order-first mb-4">
                            <v-card flat class="rounded-lg text-muted" style="border: 0.1rem solid #42b883; background-color: #f9f9f9">
                                <v-card-title
                                    class="text-subtitle-1 font-weight-bold grey--text text--darken-3">Required
                                    Documents</v-card-title>
                                <v-card-subtitle class="text-left">Please upload any of the following
                                    documents:</v-card-subtitle>
                                <ul class="text-left ml-5 pb-4">
                                    <li>Tax Declaration</li>
                                    <li>Transfer Certificate of Title</li>
                                    <li>Statement of Account</li>

                                    <li class="mt-3">Contract to Sell</li>
                                    <li>Deed of Sale</li>
                                    <li>Deed of Conditional Sale</li>

                                    <li class="mt-3">Tax Clearance</li>
                                    <li>Notice of Delinquency</li>
                                    <li>Notice of Assessment</li>
                                </ul>
                            </v-card>
                        </v-col>
                    </template>
                </v-row>

                <v-row dense>
                    <v-col cols="12">
                        <input type="file" id="fileInput" ref="fileRef" @change="fileUpload" multiple class="d-none"
                            required></input>
                        <v-btn block class="text-capitalize mb-5 rounded-lg" depressed height="80px"
                            style="border: 3px dashed #E0E0E0; background-color: white" @click="fileInput"
                            @drop.prevent="handleDrop" @dragover.prevent>
                            <v-icon size="26" left color="grey darken-2">mdi-upload</v-icon>
                            <span class="h6 mb-0 grey--text text--darken-2">Drag Files or Browse</span>
                        </v-btn>
                        <div v-if="form.files && form.files.length > 0">
                            <div class="d-flex align-center">
                                <v-card-subtitle class="font-weight-bold px-0 py-2">Uploaded
                                    files ({{ form.files.length }}):</v-card-subtitle>
                                <v-spacer></v-spacer>
                                <a v-if="form.files && form.files.length > 1" style="color: #D32F2F"
                                    class="font-weight-bold text-subtitle-2 text-decoration-none"
                                    @click="deleteAllFiles"><span>Clear All</span></a>
                            </div>
                            <div class="custom-slide-group">
                                <v-slide-group multiple :show-arrows="false" class="my-3"
                                    prev-icon="mdi-chevron-left-circle" next-icon="mdi-chevron-right-circle">
                                    <v-slide-item v-for="(file, index) in form.files" :key="index">
                                        <div style="position: relative; width: clamp(90px, 8vw, 140px)"
                                            class="mt-4 mr-4 mb-4">
                                            <v-img :src="thumbnails[index]" class="border rounded-lg"
                                                @click="previewFile(index)" contain
                                                style="height: clamp(90px, 8vw, 140px); cursor: pointer"></v-img>
                                            <v-btn depressed fab dark height="25px" width="25px" absolute
                                                color="red darken-2" style="top: -10px; right: -10px"
                                                @click="deleteFile(index)"><v-icon size="25">mdi-minus</v-icon></v-btn>
                                        </div>
                                    </v-slide-item>
                                </v-slide-group>
                            </div>
                        </div>
                        <v-btn type="submit" depressed color="primary" large :x-large="$vuetify.breakpoint.mdAndUp"
                            block @click="isFormSubmitted = true"
                            class="text-capitalize font-weight-bold text-subtitle-1 rounded-lg">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    metaInfo() {
        return { title: "Register Property" };
    },
    data() {
        return {
            pageBreadcrumbs: [
                { text: 'Home', to: '/index' },
                { text: 'Current Page', to: '/registerproperty' },
            ],
            prevDialog: false,
            thumbnails: [],
            previewImage: null,
            previewName: null,
            form: {
                td_no: null,
                pin: null,
                last_orno: null,
                last_amt_paid: null,
                relationship: null,
                email: null,
                mobileno: null,
                property_type: null,
                files: [],
            },
            optionType: undefined,
            rules: {
                td_no: [
                    (v) => !!v || 'This is required',
                    (v) => /^[0-9]{2}-[0-9]{4}-[0-9]{5}$/.test(v) || 'This must be valid',
                ],
                pin: [
                    (v) => !!v || 'This is required',
                    (v) => /^[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2}(-[0-9]{4})?$/.test(v) || 'This must be valid'
                ],
                last_orno: [
                    (v) => !!v || 'This is required',
                    (v) => /^[0-9]+$/.test(v) || 'This must be valid',
                ],
                last_amt_paid: [(v) => !!v || 'This is required'],
                relationship: [(v) => !!v || 'This is required'],
                email: [
                    (v) => !!v || "This is required",
                    (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v) || "This must be valid",
                ],
                mobileno: [
                    (v) => !!v || 'This is required',
                    (v) => /^\d{11}$/i.test(v) || 'This must be valid',
                ],
                property_type: [
                    (v) => !!v || 'This is required',
                ]
            },
            isFormSubmitted: false,
            isTextFieldFocused: false,
        }
    },

    computed: {
        selectOption() {
            this.form = Object.fromEntries(Object.keys(this.form).map(key => [key, null]));
            return this.optionType !== undefined;
        },

        withOption() {
            this.resetValidationRules();
            return this.optionType !== 'with';
        },

        withoutOption() {
            this.resetValidationRules();
            return this.optionType !== 'without';
        }
    },
    methods: {
        resetDialog() {
            this.previewImage = null;
        },
        closePrevDialog() {
            this.prevDialog = false;
            this.resetDialog();
        },
        previewFile(index) {
            var file = null;
            file = this.form.files[index];
            if (file && file.type.startsWith('image/')) {
                this.previewImage = URL.createObjectURL(file);
            } else {
                this.previewImage = '/img/blank.svg';
            }
            this.previewName = file.name;
            this.prevDialog = true;
        },
        fileInput() {
            this.$refs.fileRef.click();
        },
        fileUpload(event) {
            if (event.target.files && event.target.files.length > 0) {
                const selectedFiles = Array.from(event.target.files);

                const allowedExtensions = /\.(png|jpg|jpeg|pdf|doc|docx)$/i;
                const maxFileSize = 2 * 1024 * 1024;
                const isFileExtension = selectedFiles.every(file =>
                    allowedExtensions.test(file.name)
                );
                const isMaximumSize = selectedFiles.every(file =>
                    file.size <= maxFileSize
                );

                if (isFileExtension && isMaximumSize) {
                    if (!this.form.files) {
                        this.form.files = [];
                    }
                    this.form.files.push(...selectedFiles);

                    selectedFiles.forEach(file => {
                        if (file && file.type.startsWith('image/')) {
                            const thumbnailUrl = URL.createObjectURL(file);
                            this.thumbnails.push(thumbnailUrl);
                        } else if (file && file.type.startsWith('application/pdf')) {
                            this.thumbnails.push('/img/pdf.svg');
                        } else {
                            this.thumbnails.push('/img/doc.svg');
                        }
                    });

                    event.target.value = '';
                } else if (!isFileExtension) {
                    this.$root.$emit('show-global-snackbar', {
                        message: 'Only png/jpg/jpeg/pdf/doc/docx file extensions are allowed!',
                        icon: 'mdi-information',
                    });
                    event.target.value = '';
                } else if (!isMaximumSize) {
                    this.$root.$emit('show-global-snackbar', {
                        message: 'Please upload a file with maximum size of 2MB!',
                        icon: 'mdi-information',
                    });
                    event.target.value = '';
                }
            }
        },
        handleDrop(event) {
            event.preventDefault();
            if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
                const selectedFiles = Array.from(event.dataTransfer.files);

                const allowedExtensions = /\.(png|jpg|jpeg|pdf|doc)$/i;
                const maxFileSize = 2 * 1024 * 1024;
                const isFileExtension = selectedFiles.every(file =>
                    allowedExtensions.test(file.name)
                );
                const isMaximumSize = selectedFiles.every(file =>
                    file.size <= maxFileSize
                );

                if (isFileExtension && isMaximumSize) {
                    if (!this.form.files) {
                        this.form.files = [];
                    }
                    this.form.files.push(...selectedFiles);

                    selectedFiles.forEach(file => {
                        if (file && file.type.startsWith('image/')) {
                        const thumbnailUrl = URL.createObjectURL(file);
                        this.thumbnails.push(thumbnailUrl);
                        } else if (file && file.type.startsWith('application/pdf')) {
                        this.thumbnails.push('/img/pdf.svg');
                        } else {
                        this.thumbnails.push('/img/doc.svg');
                        }
                    });

                    event.dataTransfer.value = '';
                } else if (!isFileExtension) {
                    this.$root.$emit('show-global-snackbar', {
                        message: 'Only png/jpg/jpeg/pdf/doc/docx file extensions are allowed!',
                        icon: 'mdi-information',
                    });
                    event.dataTransfer.value = '';
                } else if (!isMaximumSize) {
                    this.$root.$emit('show-global-snackbar', {
                        message: 'Please upload a file with maximum size of 2MB!',
                        icon: 'mdi-information',
                    });
                    event.dataTransfer.value = '';
                }
            }
        },
        deleteFile(index) {
            this.form.files.splice(index, 1);
            this.thumbnails.splice(index, 1);
            this.resetFile();
        },
        deleteAllFiles() {
            this.form.files = [];
            this.thumbnails = [];
            this.resetFile();
        },
        resetFile() {
            const fileInput = this.$refs.fileRef;
            if (fileInput) {
                fileInput.value = '';
            }
        },
        async save() {
            if (this.$refs.form.validate()) {
                if (this.form.files != null) {
                    const formData = new FormData();
                    formData.append('td_no', this.form.td_no);
                    formData.append('pin', this.form.pin);
                    formData.append('last_orno', this.form.last_orno);
                    formData.append('last_amt_paid', this.form.last_amt_paid);
                    formData.append('relationship', this.form.relationship);
                    formData.append('email', this.form.email);
                    formData.append('mobileno', this.form.mobileno);
                    formData.append('property_type', this.form.property_type);

                    if (this.form.files !== null) {
                        this.form.files.forEach(file => {
                            formData.append('files[]', file);
                        });
                    }

                    await axios
                        .post("/api/records/registerProperty", formData)
                        .then((result) => {
                            switch (result.data.val) {
                                case 0:
                                    this.$swal({
                                        icon: result.data.icon,
                                        title: result.data.title,
                                        text: result.data.text,
                                        timer: 6000,
                                        confirmButtonText: 'Ok',
                                        scrollbarPadding: false,
                                    });
                                    this.$refs.form.reset();
                                    this.deleteAllFiles();
                                    break;
                                default:
                                    break;
                            }
                        })
                        .catch((result) => {
                        });
                } else {
                    this.$root.$emit('show-global-snackbar', {
                        message: 'Please upload at least one file!',
                        icon: 'mdi-alert-circle',
                    });
                }
            } else {
                this.scrollToError();
                if (this.validationResetTimeout) {
                    clearTimeout(this.validationResetTimeout);
                }
                this.validationResetTimeout = setTimeout(() => {
                    this.resetValidationRules();
                    this.validationResetTimeout = null;
                }, 3000);
            }
        },
        scrollToError() {
            this.$nextTick(() => {
                this.$refs.form.$el.querySelector('.v-input--has-state .error--text').scrollIntoView({block: "center", behavior: "smooth"})
            });
        },
        resetValidationRules() {
            this.isFormSubmitted = false;
        },
        setTextFieldFocused(value) {
            this.isTextFieldFocused = value;
        },
    },
    beforeDestroy() {
        this.thumbnails.forEach(url => URL.revokeObjectURL(url));
    }
}
</script>