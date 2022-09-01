export const validation = {
    email:{
        required:'required',
        pattern:{
            value:/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            message:'The email address is incorrect',
        },
    },
    password:{
        pattern: {
            required:'required',
            message:'required1',
        }

    },
}