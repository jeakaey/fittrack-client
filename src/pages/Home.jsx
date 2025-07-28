import '../App.css';
import WeightList from '../components/WeightList';

export default function Home() {
    return (
        <div>
            <h2 style={{ color: 'blue' }}>
               Welcome to FitTrack, your
               application that helps you to<br /> follow your weight loss on a daily basis!</h2>
            <p className='large-size-text'>
                You can enter your weight every morning.
                Your history will be displayed here.
                Good luck with your weight loss!<br />
                For any questions, please refer to the documentation or contact
                our support team.</p>
            <p className='large-size-text'>Enter your fasting weight
                for today in the form below.</p>
            <WeightList />
        </div>
    );
}
