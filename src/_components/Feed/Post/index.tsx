import { useEffect, useState } from "react"
import { Alert, Image, Text, TouchableOpacity, View } from "react-native"
import { getCurrentUser } from "../../../_services/UserService"
import { IUser } from "../../../_services/UserService/types"
import Avatar from "../../Avatar"
import Comments from "../Comments"
import styles from "./styles"
import { IPost } from "./types"
import * as FeedService from '../../../_services/FeedService';

const Post = (props: { post: IPost }) => {
    const [liked, setLiked] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(props.post.likes.length)
    const [commented, setCommented] = useState<boolean>(false)
    const [commentInputActive, setCommentInputActive] = useState<boolean>(false)
    const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2)
    const [userLogged, setUserLogged] = useState<IUser>()

    useEffect(() => {
        verifyLiked()
        verifyCommented()
    }, [])

    const toggleLike = async () => {
        setLiked(!liked)
        try {
            await FeedService.toggleLike(props.post.id)
            if(liked){
                setLikes(likes - 1)
            }else{
                setLikes(likes + 1)
            }
        } catch (error: any) {
            console.log(error)
            Alert.alert("Erro", "Erro ao efetuar a curtida")
        }
    }

    const verifyLiked = async () => {
        const user = await getCurrentUser()
        setUserLogged(user)
        if (user.id) {
            setLiked(props.post.likes.includes(user.id))
        }
    }

    const verifyCommented = async () => {
        const user = await getCurrentUser()
        setUserLogged(user)
        if (user.id) {
            setCommented(props.post.comments.find(comment => comment.userId == user.id) ? true : false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Avatar user={props.post.user} />
                <Text style={styles.textUserName}>{props.post.user.name}</Text>
            </View>
            <View>
                <Image style={styles.postImage} source={{ uri: props.post.image }} />
            </View>
            <View style={styles.containerLikeAndComment}>
                <TouchableOpacity onPress={() => toggleLike()}>
                    <Image
                        style={styles.icon}
                        source={liked ?
                            require('../../../_assets/images/liked.png')
                            : require('../../../_assets/images/notLiked.png')} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => setCommentInputActive(!commentInputActive)}>
                    <Image
                        style={styles.icon}
                        source={commented || commentInputActive ?
                            require('../../../_assets/images/commented.png')
                            : require('../../../_assets/images/notCommented.png')} />
                </TouchableOpacity>


                <Text style={styles.textLike}>Curtido por <Text style={[styles.textLike, styles.TextLikeBold]}>{likes} pessoas</Text></Text>
            </View>

            <View style={styles.containerDescription}>
                <Text numberOfLines={numberOfLines} style={styles.textDescription}>
                    <Text style={styles.textUserName}>
                        {props.post.user.name}
                    </Text>
                    {' ' + props.post.description}
                </Text>
                {props.post.description.length > 90 &&
                    <TouchableOpacity style={{ alignItems: "flex-end", justifyContent: "flex-end" }} onPress={() => setNumberOfLines(numberOfLines ? undefined : 2)}>
                        <Text style={styles.textMoreOrLess}>
                            {!numberOfLines ? 'menos' : 'mais'}
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            {
                userLogged &&
                <Comments idPost={props.post.id} userLogged={userLogged} inputCommentIsActive={commentInputActive} comments={props.post.comments} />
            }
        </View >
    )
}

export default Post