export const validation = {
    email:{
        required:'Email field is required',
        pattern:{
            value:/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            message:'The email address is incorrect',
        },
    },
    password:{
        required:'Password field is required',
        minLength: {
            value: 6,
            message: "Min password size 6 symbols"
        },
    },
}