export interface Coordinator {
    name: string;
    phone: string;
    email?: string;
    roll_no?: string;
    class?: string;
  }
  
  export interface EventDetails {
    name: string;
    venue?: string;
    type: 'technical' | 'non-technical';
    time?: string;
    rules?: string[];
    coordinator?: {
      name: string;
      phone: string;
    };
  }
  
  export interface Department {
    name: string;
    faculty_coordinator?: Coordinator;
    faculty_coordinators?: Coordinator[];
    student_coordinator: Coordinator;
    events: EventDetails[];
  }
  
  export interface ScheduleData {
    departments: Record<string, Department>;
  }