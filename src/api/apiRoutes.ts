/** @format */

export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://transformers-thyh.onrender.com/api";

  static BASE_URL_TEST: string = "https://transformers-thyh.onrender.com/api";

  static BASE_URL_LIVE: string = "https://api.transformersng.site/api";

  static BASE_URL_LOCAL: string = "http://localhost:3000";

  //#region Auth routes

  // Api route to login
  static LoginUser: string = "/user/login";

  // Api route to register
  static CreateUser: string = "/user";

  // Api route to complete registration
  static CompleteRegistration: (id: string) => string = (id: string) =>
    `/user/profile/${id}`;

  // Api route to reset password
  static PasswordReset: string = "/user/reset";

  // Api route to change password
  static PasswordChange: (id: string) => string = (id: string) =>
    `/user/password/${id}`;

  // Api route to resend verification code
  static ResendVerificationCode: string = "/user/code";

  // Api route to fetch categories
  static FetchCategories: string = "/category";

  // Api route to check username
  static CheckUsername: (username: string) => string = (username: string) =>
    `/user/search?username=${username}`;

  // Api route to verify otp
  static VerifyUser: (id: string) => string = (id: string) =>
    `/user/verify/${id}`;

  // Api route to create goal
  static CreateGoal: string = "/goals";

  // Api route to create team
  static CreateTeam: string = "/team";

  // Api route to create challenge
  static CreateChallenge: string = "/challenge";

  // Api route to create post
  static CreatePost: string = "/post";

  // Api route to upload image
  static ImageUpload: string = "/image/upload";

  // Api route to fetch explore stats
  static FetchExploreStats: string = "/challenge/explore?keyword";

  // Api route to fetch challenges
  static GetChallenges: (page: number, limit: number) => string = (
    page: number,
    limit: number
  ) => `/challenge/list/${page}?limit=${limit}`;

  // Api route to fetch teams
  static GetTeams: (page: number, limit: number) => string = (
    page: number,
    limit: number
  ) => `/team/${page}?limit=${limit}`;

  // Api route to fetch goals
  static GetGoals: (page: number, limit: number, param: string) => string = (
    page: number,
    limit: number,
    param: string
  ) => `/goals/list/${page}?limit=${limit}${param}`;

  // Api route to fetch posts
  static GetPosts: (page: number, limit: number, id: string) => string = (
    page: number,
    limit: number,
    id: string
  ) => `/post/all/${page}?limit=${limit}&user=${id}`;

  // Api route to fetch challenge
  static FetchChallenge: (id: string) => string = (id: string) =>
    `/challenge/${id}`;

  // Api route to fetch comments
  static FetchComments: (id: string, page: number, limit: number) => string = (
    id: string,
    page: number,
    limit: number
  ) => `/post/${id}/comment/${page}?limit=${limit}`;

  // Api route to submit comments
  static SubmitComments: (id: string) => string = (id: string) =>
    `/post/${id}/comment`;

  // Api route to like or unlike comments
  static ToggleLikeComment: (id: string) => string = (id: string) =>
    `/post/comment/${id}`;

  // Api route to like or unlike posts
  static ToggleLikePost: (id: string) => string = (id: string) =>
    `post/${id}/like`;

  // Api route to check in daily
  static DailyCheckIn: (id: string) => string = (id: string) =>
    `/challenge/${id}/check-in`;

  // Api route to complete goals
  static CompleteGoal: (id: string) => string = (id: string) =>
    `/goals/complete/${id}`;

  // Api route to delete goals
  static UpdateGoal: (id: string) => string = (id: string) => `/goals/${id}`;

  // Api route to complete goals
  static ToggleTaskCompletion: (id: string) => string = (id: string) =>
    `/goals/checklist/${id}`;

  // Api route to complete goal
  static CompleteChallenge: (id: string) => string = (id: string) =>
    `/challenge/${id}/complete`;

  // Api route to check in daily
  static LeaveChallenge: (id: string) => string = (id: string) =>
    `/challenge/${id}/leave`;

  // Api route to join team
  static JoinTeam: (id: string) => string = (id: string) => `/team/${id}/join`;

  // Api route to join challenge
  static JoinChallenge: (id: string) => string = (id: string) =>
    `/challenge/${id}/join`;

  // Api route to fetch team info
  static FetchTeamInfo: (id: string) => string = (id: string) =>
    `/team/${id}/view`;

  // Api route to fetch categorized analytics
  static FetchCategorizedAnalytics: (id: string, date: string) => string = (
    id: string,
    date: string
  ) => `/dashboard/filter?category=${id}&date=${date}`;

  // Api route to fetch analytics
  static DashboardAnalytics: string = "/dashboard/outcome";

  // Api route to fetch posts
  static FetchPosts: (id: string, page: number, limit: string) => string = (
    id: string,
    page: number,
    limit: string
  ) => `/post/all/${page}?limit=${limit}&user=${id}`;

  // Api route to fetch user
  static FetchUser: string = "/user";

  // Api route to fetch points
  static FetchPoints: (id: string, page: number, limit: string) => string = (
    id: string,
    page: number,
    limit: string
  ) => `wallet/points/${page}?limit=${limit}&user=${id}`;

  // Api route to fetch earning history
  static FetchEarningHistory: (
    id: string,
    page: number,
    limit: string
  ) => string = (id: string, page: number, limit: string) =>
    `/wallet/earnings/${page}?limit=${limit}&user=${id}`;

  // Api route to submit withdrawal request
  static SubmitWithdrawalRequest: string = "/wallet/withdrawal";

  // Api route to fetch referral network
  static FetchReferralNetwork: string = "/wallet/referral";

  // Api route to fetch referral network
  static FetchFaq: string = "/faq";
}
