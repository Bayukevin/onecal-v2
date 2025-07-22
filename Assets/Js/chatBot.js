import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
    chatflowid: "5b174b5e-cc32-4147-88ec-48f848ae4a20",
    // apiHost: "http://localhost:3000",
    apiHost: "https://cloud.flowiseai.com",
    chatflowConfig: {
        /* Chatflow Config */
    },
    observersConfig: {
        /* Observers Config */
    },
    theme: {
        button: {
            backgroundColor: '#3A795E',
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://onecal-v2.netlify.app/Assets/Images/chat.png',
            autoWindowOpen: {
                autoOpen: false,
                openDelay: 2,
                autoOpenOnMobile: false
            }
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Hi There 👋!',
            tooltipBackgroundColor: 'black',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
        },
        disclaimer: {
            title: 'Disclaimer',
            message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
            textColor: 'black',
            buttonColor: '#3A795E',
            buttonText: 'Start Chatting',
            buttonTextColor: 'white',
            blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'white'
        },
        customCSS: ``,
        chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Onecal Bot',
            titleAvatarSrc: 'https://onecal-v2.netlify.app/Assets/Images/chat.png',
            welcomeMessage: 'Halo! Tanyakan apapun tentang Onecal',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            backgroundImage: 'enter image path or link',
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: [
                "Apa itu onecal?",
                "Cara penggunaan onecal?"
            ],
            starterPromptFontSize: 15,
            clearChatOnReload: false,
            sourceDocsTitle: 'Sources:',
            renderHTML: true,
            botMessage: {
                backgroundColor: '#f7f8ff',
                textColor: '#303235',
                showAvatar: true,
                avatarSrc: 'https://onecal-v2.netlify.app/Assets/Images/img-2-learn-more.svg'
            },
            userMessage: {
                backgroundColor: '#3A795E',
                textColor: '#ffffff',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
            },
            textInput: {
                placeholder: 'Tulis pertanyaan anda di sini...',
                backgroundColor: '#ffffff',
                textColor: '#303235',
                sendButtonColor: '#3A795E',
                maxChars: 50,
                maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                autoFocus: true,
                sendMessageSound: true,
                sendSoundLocation: 'send_message.mp3',
                receiveMessageSound: true,
                receiveSoundLocation: 'receive_message.mp3'
            },
            feedback: {
                color: '#303235'
            },
            dateTimeToggle: {
                date: true,
                time: true
            },
            footer: {
                textColor: '#303235',
                text: 'Powered by',
                company: 'Onecal',
                companyLink: 'https://onecal.id'
            }
        }
    }
})
