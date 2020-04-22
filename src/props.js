export default {
    title: {
        type: String,
        required: true,
    },
    parentDivClasses: {
        type: String,
        required: false,
        default: 'table-responsive',
    },

    tableClasses: {
        type: String,
        required: false,
        default: 'table table-bordered',
    },

    theadClasses: {
        type: String,
        required: false,
        default: '',
    },
    columns: {
        type: Array,
        required: true,
    },

    rows: {
        type: Array,
        required: true,
    },

    clickable: {
        type: Boolean,
        required: false,
        default: true,
    },

    customButtons: {
        type: Function,
        required: false,
        default: () => [],
    },

    perPage: {
        type: Array,
        required: false,
        default: () => [10, 20, 30, 40, 50],
    },

    defaultPerPage: {
        type: Number,
        required: false,
        default: null,
    },

    sortable: {
        type: Boolean,
        required: false,
        default: true,
    },

    searchable: {
        type: Boolean,
        required: false,
        default: true,
    },

    exactSearch: {
        type: Boolean,
        required: false,
        default: false,
    },

    serverSearch: {
        type: Boolean,
        required: false,
        default: false,
    },

    serverSearchFunc: {
        type: Function,
        required: false,
        default: () => { },
    },

    paginate: {
        type: Boolean,
        required: false,
        default: true,
    },

    exportToExcel: {
        type: Boolean,
        required: false,
        default: true,
    },

    printable: {
        type: Boolean,
        required: false,
        default: true,
    },

    locale: {
        type: String,
        required: false,
        default: 'en',
    },

    initSortCol: {
        type: Number,
        required: false,
        default: -1,
    },

    loadingAnimation: {
        type: Boolean,
        required: false,
        default: true,
    },

    enableCheckbox: {
        type: Boolean,
        required: false,
        default: false,
    },

    checkboxValueField: {
        type: String,
        required: false,
        default: '',
    },

};