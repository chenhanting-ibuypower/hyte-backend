enum Level {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
  Expert = "Expert",
  Master = "Master"
}

enum Subject {
  Science = "Science",
  Math = "Math",
  English = "English",
  Physics = "Physics",
  Chemistry = "Chemistry"
}

declare export interface Topic {
  title: string;
  subject: Subject;
  level: Level;
}