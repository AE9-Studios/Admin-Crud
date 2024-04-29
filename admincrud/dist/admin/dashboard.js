import React from 'react';
import Cookies from 'js-cookie';
const dashboard = () => {
    const logout = async () => {
        try {
            Cookies.remove('token');
        }
        catch (error) {
            console.log(error);
        }
    };
    return (React.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
        } },
        React.createElement("div", { style: {
                marginBottom: '20px',
            } },
            React.createElement("h1", { style: {
                    textAlign: 'center',
                    fontSize: '2em',
                    padding: '10px',
                    textWrap: 'wrap',
                    color: 'black',
                    fontWeight: 'bold',
                } }, "Bienvenido al panel crud de administrador"),
            React.createElement("p", { style: {
                    color: 'black',
                    padding: '10px',
                } }, "Aqu\u00ED podr\u00E1s gestionar los registros de la base de datos haciendo click en \"prisma\" en la barra lateral podras observar todos las tablas de la base de datos, haciendo click en un modelo podras observar los registros actuales")),
        React.createElement("div", { style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
            } },
            React.createElement("a", { href: 'https://classic-vision.alhanisespinal.tech/admin/home', style: {
                    margin: '10px',
                    textDecoration: 'none',
                    color: 'black',
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    height: '100px',
                    width: '400px',
                    boxShadow: '0px 0px 10px 0px lightgrey',
                } },
                React.createElement("div", { style: {
                        padding: '10px',
                    } },
                    React.createElement("h5", { style: {
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            textJustify: 'center',
                        } }, "Volver al Home "),
                    React.createElement("p", null, "Click aqu\u00ED para volver al panel anterior para ver todas las funciones del administrador"))),
            React.createElement("a", { onClick: logout, href: 'https://classic-vision.alhanisespinal.tech/login', style: {
                    margin: '10px',
                    textDecoration: 'none',
                    color: 'black',
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    height: '100px',
                    width: '400px',
                    boxShadow: '0px 0px 10px 0px lightgrey',
                } },
                React.createElement("div", { style: {
                        padding: '10px',
                    } },
                    React.createElement("h5", { style: {
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            textJustify: 'center',
                        } }, "Salir "),
                    React.createElement("p", null, "Click aqu\u00ED para cerrar tu sesi\u00F3n"))))));
};
export default dashboard;
