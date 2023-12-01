import { Provider } from 'react-redux';
import App from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import { initStore } from '../redux';

class Principal extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={this.props.store || initStore()}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const wrapper = createWrapper(initStore);

export default wrapper.withRedux(Principal);
