import { useCallback, useEffect, useState } from "react"
import { Alert, Text, TextInput, View } from "react-native"
import Avatar from "../../Avatar"
import styles from "./styles"
import { IComment, ICommentsComponent } from "./types"
import * as FeedService from '../../../_services/FeedService';

const Comments = (props: ICommentsComponent) => {
    const [comment, setComment] = useState<string>('')
    const [comments, setComments] = useState<IComment[]>(props.comments)

    const onComment = async () => {
        try {
            if(props.userLogged && props.userLogged.name && props.userLogged.id){
                await FeedService.sendComment(props.idPost, comment)
                const commentList = comments 
                commentList.push({
                    message: comment,
                    name: props.userLogged.name,
                    userId: props.userLogged.id
                })
                setComments(commentList)
                setComment('')
            }
        } catch (error: any) {
            console.log(error)
            Alert.alert("Erro", "Erro ao enviar o comentario")
        }
    }

    return (
        <View>
            <View style={styles.containerComments}>
                {comments?.length > 0 && comments.map((comment: IComment, index: number) => (
                    <View key={index} style={styles.comment}>
                        <Text style={styles.textComment}>
                            <Text style={styles.textName}>
                                {comment.name}
                            </Text>
                            {' ' + comment.message}
                        </Text>
                    </View>
                ))}

                {props.inputCommentIsActive &&
                    <View style={styles.containerInputComment}>
                        <Avatar user={props.userLogged} />
                        <TextInput
                            placeholder="Adicione um comentario"
                            value={comment}
                            style={styles.inputComment}
                            onChangeText={value => setComment(value)}
                            onSubmitEditing={onComment}
                            autoCapitalize='none'
                        />
                    </View>
                }

            </View>
        </View>
    )
}

export default Comments