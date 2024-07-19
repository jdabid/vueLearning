const {createApp, ref} = Vue;

const app = createApp({
    //template: `
    //<h1>{{ message }}</h1>
    //<p>{{ author }}</p>
    //`,

    setup(){
        const message = ref("He's Batman")
        const author = ref("este es el autor")

        const changeQuote = () => {

            message.value = 'El es Goku';
            author.value = 'aqui esta el autor';

        }

        //setTimeout(() => {
        //    message.value = 'El es Goku';
        //    author.value = 'aqui esta el autor';
        //}, 1000);

        return{
            message,
            author,

            changeQuote,
        }
    }
});

app.mount('#appdevue');