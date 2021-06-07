module.exports = async function (context, req) {
    context.log('Probando funcion');
    context.res = {
        body: "Hola mundo ! Hidai"
    };
};
