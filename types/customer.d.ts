declare interface Customer {
	name: string | null;
	email: string;
	level?: AcademicLevel | null | undefined;
	activitiesCompleted: number;
	totalHoursStudied: number;
	initialLevel?: AcademicLevel | null | undefined;
	lastSignIn: Date;
	createdAt: Date;
}
declare interface TableCustomer {
	name: string | null;
	email: string;
	level?: AcademicLevel | null | undefined;
	activitiesCompleted: number;
	totalHoursStudied: number;
	initialLevel?: AcademicLevel | null | undefined;
	lastSignIn: string;
	createdAt: string;
}

enum AcademicLevel {
	Beginner = "Beginner",
	Intermediate = "Intermediate",
	Advanced = "Advanced",
	Gifted = "Gifted",
	Struggling = "Struggling",
	Proficient = "Proficient",
	Exceptional = "Exceptional",
	Underachieving = "Underachieving",
	HighAchieving = "High-achieving",
	Talented = "Talented"
}
