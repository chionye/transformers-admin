/** @format */

import type {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "@/services/api/api-clients";
import type { newTeamSchema, newUserSchema } from "@/utils/form-schema";
import { type AxiosResponse, type Method } from "axios";
import type z from "zod";
export interface FabPropType {
  icon: string;
  callback: () => void;
}

export interface DropdownPropType {
  label: string;
  cn?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  //eslint-disable-next-line
  data?: any;
}

export type HomeTableData = {
  sn: string;
  fullName: string;
  country: string;
  date: string;
  goals: string;
  challenges: string;
  teams: string;
  status: "active" | "inactive";
  action: string;
};

export type UsersTableData = {
  sn: string;
  _id: string;
  fullName: string;
  email: string;
  username: string;
  reportCount: number;
  reported: boolean;
  role: string;
  points: number;
  earnings: number;
  isVerified: boolean;
  authType: string;
  referralCode: string;
  avatar: string;
  createdAt: string;
  country: string;
  dob: string;
  gender: string;
  lastLogin: string;
  followers: number;
  goals: number;
  challenges: number;
  teams: number;
};

export type OtpFieldName = `otp${1 | 2 | 3 | 4 | 5 | 6}`;

export interface DropdownOption {
  label: string;
  value?: string;
  child?: React.ReactNode;
  items?: DropdownOption[];
  onClick?: () => void;
}

export interface DynamicDropdownProps {
  label: string;
  //eslint-disable-next-line
  icon?: any;
  cn?: string;
  options: DropdownOption[];
  value?: string;
  showArrow?: boolean;
  dropdownType?: string | null;
  changeFunction?: (e: string) => void;
  openChange?: (open: boolean) => void;
  //eslint-disable-next-line
  dropDownClickFn?: (e: any) => void;
}

export interface FullModalPropType {
  children: React.ReactNode;
  title?: string;
  label?: string;
  btnTitle?: string;
  cn?: string;
  icon?: React.ReactNode;
  footer?: boolean;
  overlayClose?: boolean;
  scrollBehavior?: "inside" | "outside";
}

export interface StarRatingProps {
  label: string;
  onRatingChange: (rating: number) => void;
}

export interface UseNotifierPropType {
  title: string;
  text: string;
  status: string;
  button?: boolean;
  auth?: boolean;
  confirmText?: string;
  cancelText?: string;
  isModalOpen?: boolean;
  closeFunction?: (e: boolean) => void;
  confirmFunction?: () => void;
}

export interface NotifierPropType {
  title: string;
  text: string;
  status: string;
  auth?: boolean;
  button?: boolean;
  confirmText?: string;
  cancelText?: string;
  isModalOpen: boolean;
  closeFunction: (e: boolean) => void;
  confirmFunction?: () => void;
}

export interface FormInputPropType {
  label: string;
  type: string;
  name: string;
  cn?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  //eslint-disable-next-line
  changeFunction: (e: any) => void;
}

export interface FormSelectPropType {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  cn?: string;
  //eslint-disable-next-line
  options: any;
  disabled?: boolean;
  //eslint-disable-next-line
  changeFunction: (e: any) => void;
}

export interface FormTextAreaPropType {
  label: string;
  name: string;
  value: string;
  cn?: string;
  disabled?: boolean;
  //eslint-disable-next-line
  changeFunction: (e: any) => void;
}

export interface FormPinPropType {
  label: string;
  value: string;
  //eslint-disable-next-line
  changeFunction: any;
}

export interface FundingPropType {
  amount: string;
  user_id: string;
  reference: string;
  gateway: string;
  description: string;
}

export interface SubscriptionPropType {
  plan_id: string;
  user_id: string;
  plan_name: string;
}

export interface ConsultationFeePropType {
  consultation_amount: string;
  specialization: string;
}

export interface WithdrawPropType {
  user_id: string;
  acc_number: string;
  acc_name: string;
  bank_name: string;
  amount: string;
}

export interface RegisterPropType {
  username: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
  photo?: string;
}

export interface ResetPasswordPropType {
  email: string;
}

export interface ChangePasswordPropType {
  email: string;
  password: string;
  new_password: string;
}

export interface OTPPropType {
  email: string;
  otp: string;
}

export interface LoginPropType {
  email: string;
  password: string;
}

export interface TopDoctorsPropType {
  username: string;
  fullname?: string;
  phone?: string;
  gender?: string;
  specialization?: string;
  email?: string;
  rating?: string;
  dob?: string;
  created_at?: string;
  photo?: string;
  key?: number;
  reviews?: number;
  id?: number;
  patient_id?: number;
  allergies?: string[];
  family_history?: string;
  social_history?: string;
  sogical_history?: string;
  certifications?: string[];
  languages?: string[];
  clinic_affiliation?: string;
  years_of_experience?: string;
}

export interface MedicationHistoryPropType {
  medicine_name: string;
  dosage: string;
  frequency: string;
  note: string;
}

export interface DoctorPropType {
  fullname: string;
  username: string;
  specialization: string;
}

export interface AppointmentHistoryPropType {
  doctor: DoctorPropType;
  appointment_date: string;
  appointment_time: string;
  type: string;
  status?: string;
  description: string;
}

export interface WalletHistoryPropType {
  reference: string;
  gateway: string;
  created_at: string;
  amount: string;
  status: string;
}

export type QueryProps = {
  id: string;
  url: string;
  method: Method;
  tokenOrHeaders?: string | Record<string, string> | undefined;
  //eslint-disable-next-line
  payload: Record<string, any> | null;
};

export interface PatientPropType {
  title: string;
  icon: string;
  value: string;
  unit: string;
}

export interface TitleBarPropType {
  title: string;
  link?: string;
}

export interface TablePropType {
  thead: string[];
  //eslint-disable-next-line
  tbody?: any;
  keys: string[];
  role?: string;
}

export interface AppointmentPropType {
  title: string;
  description: string;
  appointment_time: string;
  appointment_date: string;
  link: string;
  type: string;
  doctor_id: string;
  patient_id: string;
}

export interface AppointmentDetailsPropType {
  title: string;
  description: string;
  type: string;
  appointment_id: string;
  appointment_time: string;
  appointment_date: string;
  link: string;
}

export interface User {
  id: number;
  user_id: string;
  fullname: string;
  balance: number;
  email: string;
  username: string;
  phone: string;
  country_code: string;
  country: string;
  gender: string;
  address: string;
  specialization: string;
  verification_code: string | null;
  email_verified: number;
  status: string;
  role: string;
  created_by: string;
  rating: string;
  dob: string;
  consultation_amount: string;
  role_id: string;
  email_verified_at: string | null;
  weight: string;
  height: string;
  blood_pressure: string;
  glucose_level: string;
  photo: string;
  created_at: string;
  updated_at: string;
}

export interface OnboardPatientPropType {
  doctor_id: string;
  role: string;
  email: string;
  password: string;
  fullname: string;
  country_code: string;
  country: string;
  gender: string;
  address: string;
  phone: string;
  username: string;
  allergies: string[];
  family_history: string;
  social_history: string;
  sogical_history: string;
  //eslint-disable-next-line
  photo: any;
}

export interface AppointmentFormPropType {
  data: AppointmentPropType;
  //eslint-disable-next-line
  changeFunction: (e: any) => void;
}

export interface UploadPropType {
  uploadType?: string;
  tag?: string;
  id?: string;
  icon?: string;
}

export type UserData = {
  //eslint-disable-next-line
  [key: string]: any;
};

export type ContextValue = {
  userData?: UserData;
  //eslint-disable-next-line
  updateData: (arg0: any) => void;
};

export interface NotificationPropType {
  title: string;
  message: string;
  timestamp: string;
}

export interface NotificationCardPropType {
  notifications: NotificationPropType[];
}

export interface WebsiteSettingsPropType {
  id: string;
  name: string;
  phone_number: string;
  email: string;
  address: string;
  about_us: string;
  password: string;
  created_at: string | null;
  updated_at: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PrescriptionFormProps {
  user_id: string;
  prescribed_by: string;
  medicine_name: string;
  dosage: string;
  frequency: string;
  start_date: string;
  note: string;
}

export type Transaction = {
  id: number;
  user_id: string;
  status: string;
  amount: string;
  title: string;
  description: string;
  credited_to: string;
  gateway: string;
  reference: string;
  type: string;
  bank_name: string | null;
  acc_number: string | null;
  acc_name: string | null;
  old_balance: string;
  new_balance: string;
  created_at: string;
  updated_at: string;
  username: string;
};

type UserDetails = {
  id: number;
  user_id: string;
  fullname: string;
  balance: number;
  email: string;
  username: string;
  phone: string;
  country_code: string;
  country: string;
  gender: string;
  address: string;
  specialization: string;
  verification_code: string | null;
  email_verified: number;
  status: string;
  role: string;
  created_by: string;
  rating: string;
  dob: string;
  consultation_amount: string;
  role_id: string;
  email_verified_at: string | null;
  weight: string;
  height: string;
  blood_pressure: string;
  glucose_level: string;
  photo: string;
  created_at: string;
  updated_at: string;
};

export type Rating = {
  id: number;
  rater: number;
  ratee: number;
  feedback: string;
  overall_satisfaction: number;
  communication: number;
  knowledge: number;
  bedside_manner: number;
  appointment_cancellation: number;
  no_show: number;
  waiting_time: number;
  adherence_to_treatment: number;
  average: number;
  created_at: string;
  updated_at: string;
  ratee_details: UserDetails;
  rater_details: UserDetails;
};

export type Appointment = {
  id: number;
  doctor_id: string;
  patient_id: string;
  appointment_time: string;
  appointment_date: string;
  price: string;
  title: string;
  link: string;
  type: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  doctor: UserDetails;
  patient: UserDetails;
};

export type MonthlyAppointmentSummary = {
  month: string;
  total: number;
};

export interface SubscriptioPlansProp {
  id?: string;
  name?: string;
  amount?: string;
  total_bookings?: string;
  duration?: string;
}

export type LoginProps = {
  username: string;
  password: string;
};

export interface CustomButtonProps {
  //eslint-disable-next-line
  [key: string]: any;
}

export interface TeamsTableData {
  id: string;
  name: string;
  created_by: React.ReactNode;
  team_type: string;
  member_count: number;
  date_created: string;
}

export interface ChallengesTableData {
  id: number;
  name: string;
  created_by: React.ReactNode;
  category: string;
  status: string;
  member_count: number;
  date_created: string;
}

export interface ChallengeDetailsData {
  _id: string;
  category: {
    _id: string;
    name: string;
    color: {
      _id: string;
      title: string;
      color: string;
      colorHex: string;
      primaryColor: string;
      bgColor: string;
      accentColor: string;
      icon: string;
      finalColor: string;
      createdAt: string;
      updatedAt: string;
    };
  };
  title: string;
  start: string;
  end: string;
  description: string;
  checklists: [
    {
      _id: string;
      task: string;
      isComplete: boolean;
    },
    {
      _id: string;
      task: string;
      isComplete: boolean;
    },
    {
      _id: string;
      task: string;
      isComplete: boolean;
    }
  ];
  isPublic: boolean;
  status: string;
  owner: {
    _id: string;
    fullName: string;
    username: string;
    avatar: string;
  };
  isComplete: boolean;
  participants: {
    _id: string;
    fullName: string;
    email: string;
    avatar: string;
  }[];
  icon: string;
  createdAt: string;
}
export interface ChallengeData {
  _id: string;
  category: {
    _id: string;
    name: string;
    color: {
      _id: string;
      title: string;
      color: string;
      colorHex: string;
      primaryColor: string;
      bgColor: string;
      accentColor: string;
      icon: string;
      finalColor: string;
      createdAt: string;
      updatedAt: string;
    };
  };
  title: string;
  start: string;
  end: string;
  description: string;
  isPublic: boolean;
  status: string;
  owner: {
    _id: string;
    fullName: string;
    avatar: string;
  };
  isComplete: boolean;
  participants: {
    _id: string;
    username: string;
    avatar: string;
  }[];
  icon: string;
}

export interface LeaderboardData {
  _id: string;
  fullName: string;
  email: string;
  avatar: string;
  streak: number;
  progress: number;
}

export interface ViewChallengeData {
  challenge: ChallengeDetailsData;
  percentageCompletion: number;
  leaderboard: LeaderboardData[];
  completionRate: number;
}

export interface ChallengeInfo {
  totalDocument: number;
  challenge: ChallengeData[];
}

export interface PaymentTableData {
  id: number;
  user: React.ReactNode;
  amount: string;
  subscription_plan: string;
  cycle: string;
  status: string;
  method: string;
  action: React.ReactNode;
}

export interface AlertTableData {
  id: number;
  event: string;
  user: React.ReactNode;
  date: string;
  status: string;
  action: React.ReactNode;
}

export type NewUserFormData = z.infer<typeof newUserSchema>;

export type Reminder = {
  frequency: string;
  day: number;
  time: string;
};

export type Category = {
  _id: string;
  name: string;
  color: string;
};

export type Checklist = {
  _id: string;
  task: string;
  isComplete: boolean;
};

export type UserGoal = {
  _id: string;
  fullName: string;
  username: string;
  avatar: string;
};

export type GoalsTableData = {
  reminder: Reminder;
  _id: string;
  category: Category;
  title: string;
  start: string;
  end: string;
  description: string;
  checklists: Checklist[];
  isPublic: boolean;
  status: string;
  user: UserGoal;
  isComplete: boolean;
  icon: string;
  createdAt: string;
  percentageCompletion: number;
};

export type WithdrawalTableData = {
  amount: string;
  country: string;
  bank: string;
  date_requested: string;
  status: string;
  action: React.ReactNode;
};

export interface UserTeamsTableData {
  id: number;
  team_name: string;
  role: string;
  date: string;
  team_size: number;
  action: React.ReactNode;
}

export type RequestOptions = {
  //eslint-disable-next-line
  data?: any;
  tokenOrHeaders?: string | Record<string, string>;
};

export type MakeRequestFunction<R = unknown> = (
  url: string,
  options?: RequestOptions
) => Promise<AxiosResponse<R>>;

export type GetFn = ReturnType<typeof getRequest>;
export type PostFn = ReturnType<typeof postRequest>;
export type PatchFn = ReturnType<typeof patchRequest>;
export type DeleteFn = ReturnType<typeof deleteRequest>;

export interface RequestsType {
  get: GetFn;
  post: PostFn;
  patch: PatchFn;
  del: DeleteFn;
}

export interface ResponseState {
  isSuccess: string;
  isError: string;
  setSuccess: (arg0: string) => void;
  setError: (arg0: string) => void;
}

export interface ResponseHandlerProps<T> {
  onSuccess: (data: T) => void;
  onError: (error: string) => void;
}

export interface BaseMutationInput {
  url: string;
  tokenOrHeaders?: string | Record<string, string>;
}

export interface DataMutationInput extends BaseMutationInput {
  requestType: "post" | "patch" | undefined;
  //eslint-disable-next-line
  data?: any;
}

export interface NoDataMutationInput extends BaseMutationInput {
  requestType: "get" | "delete";
}

export type MutationPayload = DataMutationInput | NoDataMutationInput;

export type MutationResponse = AxiosResponse<unknown>;
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface QueryParam {
  id: string | number;
  url: string;
  tokenOrHeaders: string | undefined;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface AnalyticsData {
  chartData: ChartDataPoint[];
  // Add other analytics properties here if needed
}

export interface HomeMetricsCardData {
  count: number;
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  percentage: number;
  key: string;
  child: string;
  sibling: string;
  from: string;
  unit?: string;
}

export type StatusType = "active" | "inactive" | "expired" | "pending";
export type ChipVariant =
  | "default"
  | "outline"
  | "secondary"
  | "destructive"
  | "success"
  | "warning";

export type Progress = {
  activeCategories: number;
  completedGoals: number;
  percentage: string;
};

export type Posts = {
  posts: string[];
  totalDocument: number;
};

export type TeamMember = {
  _id: string;
  username: string;
  avatar: string;
};

export type TeamsProp = {
  _id: string;
  name: string;
  description: string;
  owner: string;
  members: TeamMember[];
  reportCount: number;
  reported: boolean;
  icon: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type UserProfileProp = {
  profile: UsersTableData | null;
  progress: Progress | null;
  posts: Posts | null;
  teams: TeamsProp[] | null;
};

export type PointHistoryTableData = {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    username: string;
    avatar: string;
  };
  event: string;
  description: string;
  point: number;
  createdAt: string;
};

export type PointHistoryProp = {
  history: PointHistoryTableData[];
  balance: number;
  totalDocuments: number;
};

export type EarningHistoryProp = {
  history: PointHistoryTableData[];
  balance: number;
  totalDocuments: number;
};

export type UserTeams = {
  _id: string;
  name: string;
  description: string;
  owner: {
    _id: string;
    fullName: string;
    avatar: string;
  };
  members: [
    {
      _id: string;
      fullName: string;
      avatar: string;
    }
  ];
  icon: string;
  createdAt: string;
};

export type UserTeamsProp = {
  teams: UserTeams[];
  totalDocuments: number;
};

export type TeamFormData = z.infer<typeof newTeamSchema>;

export type TeamsDetailsTableData = {
  _id: string;
  name: string;
  description: string;
  owner: string;
  members: TeamMember[];
  icon: string;
  color: string;
  createdAt: string;
};

export type TeamDetailsDataProps = {
  _id: string;
  name: string;
  description: string;
  owner: {
    _id: string;
    fullName: string;
    username: string;
    avatar: string;
    country: string;
  };
  members: [
    {
      _id: string;
      fullName: string;
      username: string;
      avatar: string;
      country: string;
    }
  ];
  reportCount: number;
  reported: boolean;
  icon: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type TeamDetailDataProp = {
  team: TeamDetailsDataProps | null;
  completedGoal: GoalsTableData | null;
  members: TeamMember[] | null;
};

export type PostData = {
  _id: string;
  title: string;
  caption: string;
  commentCount: number;
  likes: string[];
  user: {
    _id: string;
    fullName: string;
    username: string;
    avatar: string;
  };
  image: string;
  postType: string;
  createdAt: string;
};

export type PostsData = {
  posts: PostData[];
  totalDocument: number;
};

export type AlertData = {
  _id: string;
  reporter: {
    _id: string;
    fullName: string;
    email: string;
    username: string;
  };
  targetType: "Team" | "Post";
  target: string | null;
  reason: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export type AlertProps = {
  history: AlertData[];
  totalDocument: number;
};

export type CommentData = {
  _id: string;
  post: string;
  user: {
    _id: string;
    fullName: string;
    username: string;
  };
  likes?: string[];
  posts?: string[];
  comment: string;
  createdAt: string;
};

export type CommentsData = {
  comments: CommentData[];
  totalDocument: number;
};

export type Recipient = {
  _id: string;
  fullName: string;
  email: string;
  country: string;
  createdAt: string;
};

export type Composer = {
  _id: string;
  fullName: string;
  email: string;
  avatar: string;
};

export type Messages = {
  _id: string;
  title: string;
  isPublished: boolean;
  content: string;
  recepients: string;
  status: string;
  composer: Composer;
  createdAt: string;
};

export type MessageProp = {
  totalDocument: number;
  message: Messages[];
};

export type MessageDetailsProp = {
  message: Partial<Messages>;
  recepients: Recipient[];
};

export type BlogProp = {
  _id: string;
  title: string;
  content: string;
  photo: string;
  composer: Composer;
  isPublished: boolean;
  createdAt: string;
};

export type BlogsProp = {
  totalDocument: number;
  blogs: BlogProp[];
};

export type OpportunitiesProp = {
  _id: string;
  title: string;
  content: string;
  photo: string;
  link: string;
  isPublished: boolean;
  composer: Composer;
  createdAt: string;
};

export type OpportunitiesPropData = {
  totalDocument: number;
  opportunities: OpportunitiesProp[];
};

export type EventProp = {
  _id: string;
  title: string;
  eventDate: string;
  description: string;
  photo: string;
  status: string;
  location: string;
  composer: Composer;
  link: string;
  createdAt: string;
};

export type EventsPropData = {
  totalDocument: number,
  event: EventProp[],
}