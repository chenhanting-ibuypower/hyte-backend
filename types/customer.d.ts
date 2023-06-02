declare interface Customer {
	name: string | null;
	email: string;
	level?: number | null;
	activitiesCompleted: number;
	totalHoursStudied: number;
	initialLevel?: number | null;
	lastSignIn: Date;
	createdAt: Date;
}