import { LikeType } from "./LikeType";
import { ReplyType } from "./ReplyType";
import { UserType } from "./UserType";

export type ThreadType = {
    id: number;
    content: string;
    image: string;
    user: UserType
    replies: ReplyType[];
    likes: LikeType[];
    createdAt: string;
};

export type ThreadPost = {
	content: string;
};