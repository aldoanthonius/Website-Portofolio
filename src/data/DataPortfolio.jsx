import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'
import portfolio4 from '../assets/portfolio4.jpg'

export const portfolioList = [
    {
        id: '1',
        title: 'OnTick Event Ticketing Platform',
        image:portfolio1,
        skill: 'Laravel, HTML, CSS, PHP, MySQL, Git',
        description1: '● Led development of full-stack event ticketing platform',
        description2: '● Implemented key features including user authentication, profile management, ticket purchasing, and eventsearch',
        description3: '● Utilized Git for version control in collaborative development environment',
        tautan: 'https://github.com/sten-shoukaku/webprog-semester5'
    },
    {
        id: '2',
        title: 'Movie Recommendation System',
        image:portfolio2,
        skill: 'Python, scikit-learn, Pandas, Gradio',
        description1: '● Built recommendation engine using K-Nearest Neighbour and Cosine Similarity algorithms',
        description2: '● Implemented data preprocessing pipeline for movie dataset optimization',
        description3: '● Developed interactive web interface using Gradio for real-time recommendations '

    },
    {
        id: '3',
        title: 'Fake News Detection in Health Content',
        image:portfolio3,
        skill: 'Python, Pytorch, Transformers, HuggingFace, Gradio',
        description1: '● Developed ML model achieving 85%+ accuracy in detecting health-related misinformation',
        description2: '● Implemented and compared multiple BERT-based models (BERT, DeBERTa, DeBERTa v3, DistilBERT, RoBERTa)',
        description3: '● Enhanced dataset quality through preprocessing and augmentation using EDA  ',
        description4: '● Created user-friendly interface using Hugging Face and Gradio ',
        tautan: 'https://drive.google.com/drive/folders/1YfQJkRZGUCzUxbYdPZCPRCkVPx-o6N46?usp=sharing'
    },
    {
        id: '4',
        title: 'Website Portfolio',
        image:portfolio4,
        skill: 'ReactJS, HTML, CSS, Javascript, Vercel',
        description1: '● Designed and developed responsive personal portfolio website showcasing projects and professional experience',
        description2: '● Built using React and JavaScript with modern UI/UX principles',
        description3: '● Implemented smooth animations and interactive elements to enhance user engagement',
        description4: '● Deployed and maintained website using Vercel for reliable hosting and continuous deployment'

    },
]