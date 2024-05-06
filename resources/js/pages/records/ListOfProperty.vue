<template>
  <v-container fluid>
    <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>
    <v-dialog v-model="attachmentsDialog" max-width="550px" scrollable>
      <v-form fast-fail ref="form1" @submit.prevent="updateAttachment">
        <v-card>
          <v-toolbar flat>
            <span class="grey--text text--darken-3 text-h6 font-weight-bold">My Attachments</span>
            <v-spacer></v-spacer>
            <v-btn fab depressed small @click="closeAttachmentsDialog" color="blue-grey lighten-5">
              <v-icon size="27" color="grey darken-2">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="my-0"></v-divider>
          <v-card-text class="pa-5" style="height: auto">
            <v-card outlined class="pa-3 rounded-lg">
              <h6 class="font-weight-bold mb-3">Files ({{ form1.files.length }}):</h6>
              <v-divider class="mt-0"></v-divider>
              <div class="d-flex flex-column">
                <div v-for="(file, index) in form1.files" :key="index" cols="12" class="px-0">
                  <div class="d-flex flex-row mb-2 align-center">
                    <div class="flex-grow-1 text-truncate">
                      <a class="text-decoration-none" @click="previewFile(index, 'file')">{{
                        baseName(file)
                      }}</a>
                    </div>
                    <div class="flex-grow-0 ml-2">
                      <v-btn depressed class="text-capitalize text-white rounded-lg" @click="deleteFile(index, 'file')"
                        color="red" outlined small :disabled="form1.files.length === 1">
                        <v-icon left small>mdi-delete-forever</v-icon>
                        Delete
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>

            <div class="mt-5">
              <input type="file" id="fileInput" ref="fileRef" @change="fileUpload" multiple class="d-none"
                required></input>
              <v-btn block class="text-capitalize rounded-lg" depressed height="80px"
                style="border: 3px dashed #E0E0E0; background-color: white" @click="fileInput"
                @drop.prevent="handleDrop" @dragover.prevent>
                <v-icon size="26" left color="grey darken-2">mdi-upload</v-icon>
                <span class="h6 mb-0 grey--text text--darken-2">Drag Files or Browse</span>
              </v-btn>
              <div v-if="form1.upload && form1.upload.length > 0" class="mt-3">
                <div class="d-flex align-center">
                  <v-card-subtitle class="font-weight-bold px-0 py-2 grey--text text--darken-3">Additional files ({{
                    form1.upload.length }}):</v-card-subtitle>
                  <v-spacer></v-spacer>
                  <a v-if="form1.upload && form1.upload.length > 1" style="color: #D32F2F"
                    class="font-weight-bold text-subtitle-2 text-decoration-none" @click="deleteAllFiles"><span>Clear All</span></a>
                </div>
                <div class="custom-slide-group">
                  <v-slide-group multiple :show-arrows="false" class="my-2" prev-icon="mdi-chevron-left-circle"
                    next-icon="mdi-chevron-right-circle">
                    <v-slide-item v-for="(upload, index) in form1.upload" :key="index">
                      <div style="position: relative; width: clamp(90px, 8vw, 140px)" class="mt-4 mr-4 mb-4">
                        <v-img :src="thumbnails[index]" contain class="border rounded-lg"
                          @click="previewFile(index, 'upload')"
                          style="height: clamp(90px, 8vw, 140px); cursor: pointer"></v-img>
                        <v-btn depressed fab dark height="25px" width="25px" absolute color="red darken-2"
                          style="top: -10px; right: -10px" @click="deleteFile(index, 'upload')"><v-icon
                            size="25">mdi-minus</v-icon></v-btn>
                      </div>
                    </v-slide-item>
                  </v-slide-group>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-divider class="my-0"></v-divider>
          <div class="d-flex justify-end pa-5" :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
            style="gap: 8px">
            <v-btn color="blue-grey lighten-5" depressed @click="closeAttachmentsDialog"
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg" large>
              Cancel
            </v-btn>
            <v-btn type="submit" color="primary" depressed @click="isFormSubmitted = true" large
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg order-first order-md-last">
              Save Changes
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-dialog>

    <v-dialog v-model="prevDialog" max-width="1050px" scrollable @input="resetDialog">
      <v-card class="rounded-lg">
        <v-toolbar class="p-0" dense flat>
          <span class="grey--text text--darken-3 text-subtitle-2 font-weight-bold text-truncate">{{ this.previewName
            }}</span>
          <v-spacer></v-spacer>
          <v-btn fab depressed x-small @click="closePrevDialog" color="blue-grey lighten-5" class="ml-3">
            <v-icon size="20" color="grey darken-2">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider class="my-0"></v-divider>
        <v-card-text class="p-0">
          <v-img class="border" v-if="this.previewImage" :src="previewImage" contain height="100%" width="100%"></v-img>
          <!-- <h6 class="text-center" v-if="this.previewImage === ''">
            No Preview Available
          </h6> -->
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-card class="pa-4 mb-4 rounded-xl shadow" v-if="
      isAuthenticated &&
      temp_table0 &&
      temp_table0.data &&
      temp_table0.data.length !== 0
    ">
      <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3">Pending Property
        Registration</v-card-title>
      <v-row dense>
        <v-spacer></v-spacer>
        <v-col cols="6" sm="3" lg="2">
          <v-select v-model="registerType" :items="registerTypeItems" label="Registration Type" single-line hide-details
            rounded filled dense clearable @change="getPendingProp"></v-select>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <v-text-field v-model="search0" prepend-inner-icon="mdi-magnify" label="Search" single-line hide-details
            rounded filled dense clearable></v-text-field>
        </v-col>
      </v-row>

      <v-data-table :loading="loadTable0" :headers="pendingHeaders" :items="table0.data" class="my-4"
        mobile-breakpoint="0" :search="search0">
        <template v-slot:[`item.is_approve`]="{ item }">
          <v-chip :color="statusColor(item.is_approve)" pill dark :small="$vuetify.breakpoint.smAndDown" text-color="orange">
            {{ item.is_approve }}
          </v-chip>
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn depressed class="text-capitalize rounded-lg" outlined :small="$vuetify.breakpoint.smAndDown"
            color="blue darken-2" @click="editAttachment(item)">
            <v-icon left small> mdi-file </v-icon>
            Attachments
          </v-btn>
          <v-btn depressed class="text-capitalize rounded-lg" outlined :small="$vuetify.breakpoint.smAndDown"
            color="red darken-2" @click="cancelRegister(item)">
            <v-icon left small>mdi-cancel</v-icon>
            Cancel
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <v-card class="pa-4 mb-4 rounded-xl shadow" v-if="isAuthenticated">
      <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3">Registered Property</v-card-title>
      <template v-if="table1 && table1.data && table1.data.length > 0">
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="4" lg="3" class="pa-0">
            <v-text-field v-model="search1" prepend-inner-icon="mdi-magnify" label="Search" single-line hide-details
              rounded filled dense clearable></v-text-field>
          </v-col>
        </v-row>

        <v-dialog v-model="nicknameDialog" max-width="450px" scrollable>
          <v-form fast-fail ref="form2" @submit.prevent="updateNick">
            <v-card>
              <v-toolbar flat>
                <span class="grey--text text--darken-3 text-h6 font-weight-bold">Edit Alias</span>
                <v-spacer></v-spacer>
                <v-btn fab depressed small @click="closeNicknameDialog" color="blue-grey lighten-5">
                  <v-icon size="27" color="grey darken-2">mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider class="my-0"></v-divider>
              <v-card-text class="pa-3" style="height: auto">
                <v-container>
                  <v-row>
                    <v-col cols="12" class="pb-0">
                      <v-text-field v-model="form2.nickname" :rules="isFormSubmitted ? rules.nickname : []"
                        :dense="$vuetify.breakpoint.smAndDown" required filled clearable label="Alias"
                        class="mt-2"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider class="my-0"></v-divider>
              <div class="d-flex justify-end pa-5" :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
                style="gap: 8px">
                <v-btn color="blue-grey lighten-5" depressed @click="closeNicknameDialog"
                  class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg" large>
                  Cancel
                </v-btn>
                <v-btn type="submit" color="primary" depressed @click="isFormSubmitted = true" large
                  class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg order-first order-md-last">
                  Save Changes
                </v-btn>
              </div>
            </v-card>
          </v-form>
        </v-dialog>

        <v-data-table :loading="loadTable1" :headers="recordsHeaders" :items="properties" show-select class="my-4"
          v-model="table1Select" checkbox-color="primary" mobile-breakpoint="0" :search="search1">
          <template v-slot:item.data-table-select="{ item, isSelected, select }">
            <v-simple-checkbox :value="isSelected" :disabled="item.is_requested === '1'" @input="select($event)"
              color="primary"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <v-btn depressed class="text-capitalize rounded-lg" outlined :small="$vuetify.breakpoint.smAndDown"
              color="green darken-2" @click="editNickname(item)" :disabled="item.is_requested !== '0'">
              <v-icon left small>mdi-rename-box</v-icon>
              Edit Alias
            </v-btn>
          </template>
        </v-data-table>

        <v-row dense no-gutters>
          <v-spacer></v-spacer>
          <v-btn color="primary" large depressed class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
            :disabled="isComputeButtonDisabled" @click="requestSOA" :block="$vuetify.breakpoint.xsOnly">
            Request SOA
          </v-btn>
        </v-row>
      </template>

      <template v-if="table1 && table1.data && table1.data.length === 0">
        <v-img contain width="100%" style="height: clamp(150px, 30vw, 250px)" src="/img/no_data.svg" eager></v-img>
        <v-card-title class="d-flex align-center justify-center text-subtitle-1">It looks clean here</v-card-title>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
export default {
  metaInfo() {
    return { title: "List of Property" };
  },
  data() {
    return {
      thumbnails: [],
      registerType: null,
      registerTypeItems: [
        "With OR",
        "Without OR"
      ],
      currentattachments: null,
      value: 0,
      pageBreadcrumbs: [
        { text: "Home", to: "/index" },
        { text: "Current Page", to: "/listofproperty" },
      ],
      rules: {
        nickname: [(v) => !!v || "Alias is required"],
      },
      loadTable0: false,
      loadTable1: false,
      isFormSubmitted: false,
      attachmentsDialog: false,
      prevDialog: false,
      previewImage: null,
      previewName: null,
      nicknameDialog: false,
      search0: null,
      search1: null,
      search2: null,
      search3: null,
      info_tdno: null,
      info_pin: null,
      info_propown: null,
      info_propaddr: null,
      table1Select: [],
      temp_table0: [],
      table0: [],
      table1: [],
      table2: [],
      table3: [],
      totbasic: "0.00",
      totsef: "0.00",
      totdisc: "0.00",
      totpenalty: "0.00",
      tottax: "0.00",
      form1: {
        id: null,
        application_no: null,
        files: [],
        upload: [],
        deleted_files: [],
      },
      form2: {
        id: null,
        nickname: null,
      },
      currentnickname: {
        id: null,
        nickname: null,
      },
      pendingHeaders: [
        {
          text: "Application No.",
          value: "application_no",
          align: "center",
        },
        {
          text: "Status",
          value: "is_approve",
          align: "center",
        },
        {
          text: "Registration Type",
          value: "register_type",
          align: "left",
        },
        {
          text: "Remarks",
          value: "remarks",
          align: "left",
        },
        {
          text: "Date Registered",
          value: "submit_date",
          align: "left",
        },
        {
          text: "Action",
          value: "id",
          align: "center",
          sortable: false,
          filterable: false,
        },
      ],
      recordsHeaders: [
        {
          text: "TD No.",
          value: "td_no",
          align: "left",
        },
        {
          text: "PIN",
          value: "pin",
          align: "left",
        },
        {
          text: "Kind",
          value: "property_type",
          align: "left",
        },
        {
          text: "Owner Name",
          value: "owner_name",
          align: "left",
        },
        {
          text: "Action",
          value: "id",
          align: "center",
          sortable: false,
          filterable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    properties() {
      if (!this.table1 || !this.table1.data) {
        return [];
      }
      return this.table1.data.map(x => ({ ...x, isSelectable: x.is_requested === '0' }));
    },
    isComputeButtonDisabled() {
      return this.table1Select.length === 0;
    },
    computedCols() {
      return this.$vuetify.breakpoint.xsOnly ? 6 : "";
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.getPendingProp();
      this.getRegisteredProperty();
    }
  },
  methods: {
    resetDialog() {
      this.previewImage = null;
    },
    previewFile(index, type) {
      var file = null;
      var appno = null;
      switch (type) {
        case "file":
          file = this.form1.files[index];
          appno = this.form1.application_no;
          const checkExtensions = /\.(png|jpg|jpeg|pdf|doc|docx)$/i;
          if (checkExtensions.test(file)) {
            this.previewImage = "storage/uploads/" + appno + "/" + file;
          } else {
            this.previewImage = null;
          }
          this.previewName = this.baseName(file);
          break;
        case "upload":
          file = this.form1.upload[index];
          if (file && file.type.startsWith('image/')) {
            this.previewImage = URL.createObjectURL(file);
          } else {
            this.previewImage = '/img/blank.svg';
          }
          this.previewName = file.name;
          break;
        default:
          break;
      }
      this.prevDialog = true;
    },

    closePrevDialog() {
      this.prevDialog = false;
      this.resetDialog();
    },
    deleteFile(index, type) {
      var deletedFile = null;
      switch (type) {
        case "file":
          deletedFile = this.form1.files[index];
          this.$swal({
            icon: 'warning',
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete ' + this.baseName(deletedFile) + '?',
            showCancelButton: true,
            timer: 3000,
            confirmButtonText: 'Continue',
            cancelButtonText: 'Cancel',
            scrollbarPadding: false,
          })
            .then((result) => {
              if (result.value) {
                this.form1.files.splice(index, 1);
                this.form1.deleted_files.push(deletedFile);
              }
            });
          break;
        case "upload":
          deletedFile = this.form1.upload[index];
          this.form1.upload.splice(index, 1);
          this.thumbnails.splice(index, 1);
          this.resetFile();
          break;
        default:
          break;
      }
    },

    deleteAllFiles() {
      this.form1.upload = [];
      this.thumbnails = [];
      this.resetFile();
    },

    resetFile() {
      const fileInput = this.$refs.fileRef;
      if (fileInput) {
        fileInput.value = '';
      }
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
          if (!this.form1.upload) {
            this.form1.upload = [];
          }
          this.form1.upload.push(...selectedFiles);

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
          if (!this.form1.upload) {
            this.form1.upload = [];
          }
          this.form1.upload.push(...selectedFiles);

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

    sumField(key) {
      if (!this.table2 || !this.table2.data) {
        let val = 0;
        return val.toFixed(2);
      }
      return this.table2.data
        .reduce((total, item) => total + (parseFloat(item[key]) || 0), 0)
        .toFixed(2);
    },

    async updateAttachment() {
      if (this.form1.upload.length !== 0 || this.form1.deleted_files.length !== 0) {
        const formData = new FormData();
        formData.append("id", this.form1.id);
        formData.append("application_no", this.form1.application_no);

        for (let i = 0; i < this.form1.upload.length; i++) {
          formData.append("upload[]", this.form1.upload[i]);
        }

        for (let i = 0; i < this.form1.deleted_files.length; i++) {
          formData.append("deleted_files[]", this.form1.deleted_files[i]);
        }

        await axios
          .post("/api/records/updateAttachment", formData)
          .then((response) => {
            this.$swal({
              icon: response.data.icon,
              title: response.data.title,
              text: response.data.text,
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            this.getPendingProp();
            this.closeAttachmentsDialog();
          })
          .catch((error) => { });
      } else {
        this.closeAttachmentsDialog();
        this.$root.$emit('show-global-snackbar', {
          message: 'No changes made!',
          icon: 'mdi-information',
        });
      }
    },

    async cancelRegister(item) {
      const result = await this.$swal({
        icon: 'warning',
        title: 'Confirm Cancel',
        html: `Are you sure you want to cancel your registration for this property? <br/><br/> Application No.: ${item.application_no}`,
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel it',
        cancelButtonText: 'No',
        scrollbarPadding: false,
      });

      if (result.value) {
        axios.post("/api/records/cancelRegister", { id: item.id })
          .then((response) => {
            this.$swal({
              icon: response.data.icon,
              title: response.data.title,
              text: response.data.text,
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            this.getPendingProp();
          })
          .catch((error) => { });
      }
    },

    async updateNick() {
      if (!this.compare()) {
        this.$root.$emit("show-global-snackbar", {
          message: "No changes have been made.",
          icon: "mdi-information",
        });
        this.closeNicknameDialog();
        return;
      }
      if (this.$refs.form2.validate()) {
        this.loadTable1 = true;
        await axios
          .post("/api/records/updatenick", this.form2)
          .then((response) => {
            this.$swal({
              icon: response.data.icon,
              title: response.data.title,
              text: response.data.text,
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            this.loadTable1 = false;
            this.getRegisteredProperty();
            this.closeNicknameDialog();
          })
          .catch((error) => { });
      } else {
        if (this.validationResetTimeout) {
          clearTimeout(this.validationResetTimeout);
        }

        this.validationResetTimeout = setTimeout(() => {
          this.resetValidationRules();
          this.validationResetTimeout = null;
        }, 3000);
      }
    },

    async getPendingProp() {
      this.loadTable0 = true;
      await axios
        .get("/api/records/getRegisterPending", { params: { registerType: this.registerType } })
        .then((result) => {

          if (this.temp_table0.length === 0 || this.temp_table0.data.length === 0) {
            this.temp_table0 = result.data;
          }

          this.table0 = result.data;

          this.loadTable0 = false;
        })
        .catch((result) => { });
    },

    async getRegisteredProperty() {
      this.loadTable1 = true;
      await axios
        .get("/api/records/getRegisteredProperty")
        .then((result) => {
          this.table1 = result.data;

          this.loadTable1 = false;
        })
        .catch((result) => { });
    },

    async requestSOA() {
      await axios
        .post("/api/soa/requestSOA", this.table1Select)
        .then((result) => {
          this.$swal({
            icon: result.data.icon,
            title: result.data.title,
            text: result.data.text,
            timer: 3000,
            confirmButtonText: 'Ok',
            scrollbarPadding: false,
          });
          this.getRegisteredProperty();
          this.table1Select = [];
        })
        .catch((result) => {
        });
    },

    editAttachment(row) {
      this.form1.upload = [];
      this.form1.deleted_files = [];

      this.currentattachments = JSON.parse(JSON.stringify(row));

      this.form1.id = row.id;
      this.form1.application_no = row.application_no;

      this.form1.files = JSON.parse(row.files);

      this.attachmentsDialog = true;
    },

    baseName(str) {
      let base = new String(str).substring(str.lastIndexOf("/") + 1);
      return base;
    },

    editNickname(row) {
      this.currentnickname = JSON.parse(JSON.stringify(row));
      this.form2.id = row.id;
      this.form2.nickname = row.nickname;
      this.currentnickname.nickname = this.form2.nickname;
      this.nicknameDialog = true;
    },

    compare() {
      return this.form2.nickname !== this.currentnickname.nickname;
    },

    computeTotals() {
      this.totbasic = Number(this.sumField("bsc_tax")).toLocaleString("en", {
        minimumFractionDigits: 2,
      });
      this.totsef = Number(this.sumField("sef_tax")).toLocaleString("en", {
        minimumFractionDigits: 2,
      });
      this.totdisc = Number(this.sumField("discount")).toLocaleString("en", {
        minimumFractionDigits: 2,
      });
    },

    closeAttachmentsDialog() {
      this.attachmentsDialog = false;
    },

    closeNicknameDialog() {
      this.nicknameDialog = false;
    },

    statusColor(status) {
      return status === "For Approval" ? "orange lighten-4" : "";
    },

    resetValidationRules() {
      this.isFormSubmitted = false;
    },
  },
  beforeDestroy() {
    this.thumbnails.forEach(url => URL.revokeObjectURL(url));
  }
};
</script>
