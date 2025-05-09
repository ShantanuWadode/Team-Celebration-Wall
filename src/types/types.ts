export interface Celebration {
  id: string;
  name: string;
  photoUrl: string;
  message: string;
  date: string;
  celebrationType: 'birthday' | 'promotion' | 'anniversary' | 'achievement';
}