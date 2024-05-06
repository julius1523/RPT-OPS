// router/routes.js
function page(path) {
    return () =>
        import(/* webpackChunkName: 'yourChunkName' */ `../pages/${path}`).then(
            (m) => m.default || m
        );
}

export default [
    //Index
    {
        path: "/index",
        name: "index",
        component: page("index/Index.vue"),
    },

    //Log In
    {
        path: "/login",
        name: "login",
        component: page("login/LogIn.vue"),
    },

    //Sign Up
    {
        path: "/signup",
        name: "signup",
        component: page("signup/SignUp.vue"),
    },

    //Dashboard
    {
        path: "/dashboard",
        name: "dashboard",
        component: page("dashboard/Dashboard.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //Register Property
    {
        path: "/registerproperty",
        name: "registerproperty",
        component: page("records/RegisterProperty.vue"),
    },

    //List of Property
    {
        path: "/listofproperty",
        name: "listofproperty",
        component: page("records/ListOfProperty.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //SOA Payment
    {
        path: "/soapayment",
        name: "soapayment",
        component: page("soa/SoaPayment.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //Tax Declaration Number
    {
        path: "/taxdecnum",
        name: "taxdecnum",
        component: page("taxdec/TaxDecNum.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //Account Information
    {
        path: "/accountinfo",
        name: "accountinfo",
        component: page("account/AccountInformation.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //Account Change Password
    {
        path: "/changepassword",
        name: "changepassword",
        component: page("account/ChangePassword.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    //Error Page
    {
        path: "*",
        name: "invalid-page",
        component: page("errors/PageNotFound.vue"),
    },
];
