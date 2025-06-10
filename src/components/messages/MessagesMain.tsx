
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Paperclip, Video, Phone } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "TechSoft Solutions",
    lastMessage: "Könnten wir ein Meeting für nächste Woche vereinbaren?",
    time: "14:30",
    unread: 2,
    avatar: "TS"
  },
  {
    id: 2,
    name: "GreenTech Innovations",
    lastMessage: "Vielen Dank für die Unterlagen. Ich schaue sie mir an.",
    time: "12:15",
    unread: 0,
    avatar: "GT"
  },
  {
    id: 3,
    name: "Digital Marketing Pro",
    lastMessage: "Hallo! Ich bin sehr interessiert an Ihrem Unternehmen.",
    time: "10:45",
    unread: 1,
    avatar: "DM"
  }
];

const currentMessages = [
  {
    id: 1,
    sender: "TechSoft Solutions",
    message: "Hallo! Vielen Dank für Ihr Interesse an unserem Unternehmen.",
    time: "13:30",
    isMe: false
  },
  {
    id: 2,
    sender: "Me",
    message: "Gerne! Ich würde gerne mehr über Ihre Geschäftstätigkeit erfahren.",
    time: "13:35",
    isMe: true
  },
  {
    id: 3,
    sender: "TechSoft Solutions",
    message: "Natürlich. Wir sind seit 8 Jahren im Bereich Enterprise Software tätig und haben einen stabilen Kundenstamm aufgebaut.",
    time: "13:40",
    isMe: false
  },
  {
    id: 4,
    sender: "Me",
    message: "Das klingt sehr interessant. Könnten wir ein Meeting für nächste Woche vereinbaren?",
    time: "14:30",
    isMe: true
  }
];

const MessagesMain = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="flex-1 flex h-[calc(100vh-80px)]">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Nachrichten</h2>
        </div>
        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                selectedConversation === conversation.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>{conversation.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-sm truncate">{conversation.name}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <Badge className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">TechSoft Solutions</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {currentMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isMe
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-900 border'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${message.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Nachricht eingeben..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesMain;
