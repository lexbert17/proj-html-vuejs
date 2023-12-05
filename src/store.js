import { reactive } from "vue";
export const store = reactive ({
    arrayHeader:["Home" , "Apple", "Microsoft", "Android", "Forums", "Contact us", "join us"],
    arrayForum:[
        {
            icon:"fa-solid fa-file-lines fa-2xl",
            title:"News & Community"
        },
        {
            icon:"fa-brands fa-apple fa-2xl",
            title:"Apple Forum"
        },
        {
            icon:"fa-brands fa-windows fa-2xl",
            title:"Microsoft Forum"
        },
        {
            icon:"fa-brands fa-android fa-2xl",
            title:"Android Forum"
        },
        {
            icon:"fa-solid fa-mug-saucer fa-2xl",
            title:"General Discussion"
        },
        {
            icon:"fa-solid fa-cubes fa-2xl" ,
            title:"Apps & Software"
        },
        {
            icon:"fa-solid fa-briefcase fa-2xl",
            title:"Gadgets & Stuff"
        },
        {
            icon:"fa-solid fa-wrench fa-2xl",
            title:"Tutorials & Guides"
        },
    ]
})