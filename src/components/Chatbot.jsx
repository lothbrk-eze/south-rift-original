import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // NEW: toggle chat

  const messagesEndRef = useRef(null);

  const responses = [
    {
      regex: /price|cost|how much/i,
      replies: [
        "The product costs $199.99.",
        "It’s priced at $199.99.",
        "The cost of this product is $199.99."
      ]
    },
    {
      regex: /features|what does it do|what are the capabilities/i,
      replies: [
        "This product comes with a high-definition display, long battery life, and built-in AI functionality.",
        "It has wireless charging, water resistance, and a customizable interface.",
        "You get a variety of features such as a powerful processor and a sleek design."
      ]
    },
    {
      regex: /shipping|delivery|how long does it take to ship/i,
      replies: [
        "It usually ships within 3-5 business days.",
        "Shipping takes about 3-5 business days, depending on your location.",
        "You can expect delivery in 3-5 business days after placing the order."
      ]
    },
    {
      regex: /return policy|return|refund/i,
      replies: [
        "You can return the product within 30 days for a full refund.",
        "Our return policy allows returns within 30 days, no questions asked.",
        "We offer a 30-day return policy for full refunds."
      ]
    },
    {
      regex: /help|assist|support/i,
      replies: [
        "How can I assist you with the product?",
        "Feel free to ask me anything about the product!",
        "I’m here to help. What do you need assistance with?"
      ]
    },
    {
      regex: /hi|hello|hey/i,
      replies: [
        "Hello! How can I help you today?",
        "Hi there! What can I do for you?",
        "Hey! How can I assist you today?"
      ]
    },
    {
      regex: /program|programs/i,
      replies: [
        "Are you asking about a specific program associated with the product?",
        "This product doesn't require any special programs to use, but let me know if you need further details!",
        "If you’re referring to programs or apps, this product supports a wide variety of them!"
      ]
    },
    {
      regex: /planesale|sale/i,
      replies: [
        "you can access or purchase the plane that suits you at this site where you select the plane and it is shipped to you here in kenya",
        "you can find planes at comfortable prices here at our website",
        "there is a variety of high performance aircrafts their price varies with their carrying capacity, design nd other specifications "
      ]
    },
  ];

  const handleUserInput = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);

    let botResponse = "Sorry, I didn't quite understand that.";
    for (let response of responses) {
      if (response.regex.test(userMessage)) {
        const randomReply = response.replies[Math.floor(Math.random() * response.replies.length)];
        botResponse = randomReply;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          zIndex: 999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4caf50',
          color: '#fff',
          fontSize: '28px',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer'
        }}
      >
        {isOpen ? '✖' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '25px',
            width: '350px',
            maxHeight: '500px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            padding: '15px',
            zIndex: 998,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h4 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Talk to us</h4>
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '10px'
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'bot' ? 'flex-start' : 'flex-end',
                  marginBottom: '10px'
                }}
              >
                <div
                  style={{
                    backgroundColor: message.sender === 'bot' ? '#eee' : '#4caf50',
                    color: message.sender === 'bot' ? '#333' : '#fff',
                    padding: '10px 15px',
                    borderRadius: '20px',
                    maxWidth: '80%',
                    wordBreak: 'break-word'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ display: 'flex' }}>
            <input
              type="text"
              value={input}
              onChange={handleUserInput}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                marginRight: '5px'
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: '10px 15px',
                borderRadius: '20px',
                backgroundColor: '#4caf50',
                color: '#fff',
                border: 'none'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;