import { useEffect, useState } from 'react';
import { db, ref, onValue } from 'helpers/firebaseHelper';
import Feed from 'components/Feed';

type Props = {

}

function UserPosts({ }: Props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsData = ref(db, `userPosts/`);
        onValue(postsData, (snapshot) => {
            let data = snapshot.val();
            setPosts(data);
        });
    }, []);

    return (
        <Feed
            posts={posts}
            showMessageInput
        />
    )
}

export default UserPosts