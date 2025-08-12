import { useEffect, useState } from "react";
import { chat, kimiChat } from "@/llm";
import { Button, Input, Loading, Toast } from "react-vant";
import { ChatO, UserO } from "@react-vant/icons";

const AIGallery = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    }
  ]);
  const handleChat = async () => {
    if (text.trim() === "") {
      Toast.info({
        message: "内容不能为空",
      });
      return;
    }
    setIsSending(true);
    // 添加用户消息到消息列表
    const userMessage = {
      id: Date.now(), // 使用时间戳确保id唯一性
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setText("");
    // 添加AI消息到消息列表
    const newMessage = await kimiChat([
      {
        role: "user",
        content: text,
      },
    ]);
    console.log(newMessage);
    setMessages((prev) => {
      return [...prev, newMessage.data];
    });
    setIsSending(false);
  };
  return (
    <div className="flex flex-col h-screen" >
      
    </div>
  )
}

export default AIGallery