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
    ],
    popularTopics:["Nam a dolorvolutpat massa auctor semper", "Sed euismod nunc urna fermentum arcu dapibus fringilla.","Cras lacinia tellus id mauris finibus lacus molestie", "Curabitur a scelerisque ligula"],
    recentTopics:["Cras lacinia tellus id mauris finibus lacus molestie", "Proin at ligula sagittis vestibulum nisi vitae", "Sed nec metus at est tincidunt elementum", "Nulla egestas nuella eu nulla suscipit molestie" ],
    latestReplies:["Cras lacinia tellus id mauris finibus lacus molestie", "Cras lacinia tellus id mauris finibus lacus molestie", "Nulla egestas nuella eu nulla suscipit molestie", "Mauris ac nibh quis eros sagittis lacinia a et dui"],
})