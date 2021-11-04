import './Navbar.sass';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const Navbar = () => {
    return (
        <Layout className="layout">
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} className="menu-item">
                <Menu.Item className="item">Hola</Menu.Item>
                <Menu.Item className="item">Formulario</Menu.Item>
                <Menu.Item className="item">Gráfico</Menu.Item>
            </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;