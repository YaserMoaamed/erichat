export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contact: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatParamList = {
  TabOneScreen: undefined;
};

export type CameraParamList = {
 CameraScreen : undefined;
};

export type StatusParamList = {
 StatusScreen: undefined;
};

export type Users = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: Users[],
  lastMessage: Message
}