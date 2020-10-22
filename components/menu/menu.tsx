import {GetStaticProps, GetServerSideProps, NextPage} from "next";
import React from 'react'
interface Props {
    posts: {
        slug: string,
        name: string
    };
}
class Menu extends React.Component<Props> {
    static async getInitialProps({ req }) {
        console.log(req)
        const res = await fetch('https://test.bagheera.letsdeal.se/api/front/categories')
        const posts = await res.json()
        console.log(posts)
        return { posts }
    }
    render()
    {
        const { posts } = this.props
        console.log(this.props)
        return <nav>
            <a> test</a>
        </nav>
    }
}

// This gets called on every request
export async function getServerSideProps() {


    // Pass data to the page via props
    return { props: { name:'tet' } }
}



export const getStaticProps: GetStaticProps = async() => {
    console.log('test')
    //const res = await fetch('https://test.bagheera.letsdeal.se/api/front/categories')
    // const posts = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    const posts = [{
        "slug": 'test',
        "name": 'aa',
    },{
        "slug": 'test',
        "name": 'aa',
    }]
    return {
        props: {
            posts
        },
        revalidate: 1
    }
}

export default Menu
