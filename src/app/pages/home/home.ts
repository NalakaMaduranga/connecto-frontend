import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface NearbyUser {
  id: number;
  name: string;
  age: number;
  location: string;
  distance: string;
  image: string;
  isOnline: boolean;
  bio: string;
}

interface FeedPost {
  id: number;
  userName: string;
  userImage: string;
  timeAgo: string;
  content: string;
  likesCount: number;
  commentsCount: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  selectedDistance: number = 25;
  selectedAgeRange: number = 30;
  selectedGender: string = 'all';

  interests: string[] = ['Music', 'Travel', 'Fitness', 'Cooking', 'Gaming', 'Photography'];
  selectedInterests: string[] = ['Music', 'Travel'];

  // 📍 Nearby Live Users Mock Data
  nearbyUsers: NearbyUser[] = [
    {
      id: 1,
      name: 'Kasun',
      age: 26,
      location: 'Colombo',
      distance: '1.2 km away',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      isOnline: true,
      bio: 'Coffee lover & Software Dev ☕💻'
    },
    {
      id: 2,
      name: 'Nipuni',
      age: 23,
      location: 'Dehiwala',
      distance: '2.5 km away',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
      isOnline: true,
      bio: 'Traveler | Photographer 📸'
    },
    {
      id: 3,
      name: 'Shenal',
      age: 28,
      location: 'Mount Lavinia',
      distance: '4.0 km away',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      isOnline: false,
      bio: 'Fitness fanatic & Music enthusiast 🎸'
    },
    {
      id: 4,
      name: 'Dilini',
      age: 25,
      location: 'Nugegoda',
      distance: '4.8 km away',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
      isOnline: true,
      bio: 'Foodie & Bookworm 📚'
    }
  ];

  // 📰 Activity Feed Mock Data
  feedPosts: FeedPost[] = [
    {
      id: 1,
      userName: 'Nipuni',
      userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
      timeAgo: '10 mins ago',
      content: 'Just checked into a cozy cafe in Colombo! Anyone up for a quick coffee match? ☕✨',
      likesCount: 24,
      commentsCount: 5
    },
    {
      id: 2,
      userName: 'Kasun',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      timeAgo: '25 mins ago',
      content: 'Evening run at Independence Square 🏃‍♂️ Beautiful weather today!',
      likesCount: 18,
      commentsCount: 3
    }
  ];

  toggleInterest(interest: string) {
    if (this.selectedInterests.includes(interest)) {
      this.selectedInterests = this.selectedInterests.filter(item => item !== interest);
    } else {
      this.selectedInterests.push(interest);
    }
  }
}