/** @format */

export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://transformers-thyh.onrender.com/api";

  static BASE_URL_TEST: string = "https://transformers-thyh.onrender.com/api";

  static BASE_URL_LIVE: string = "https://api.transformersng.site/api";

  static BASE_URL_LOCAL: string = "http://localhost:3000";

  //#region Auth routes

  // Api route to login
  static LoginUser: string = "/user/admin/login";

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

  // Api route to fetch categories
  static FetchCategoryThemes: string = "/category/themes";

  // Api route to fetch category by id
  static FetchCategoryById: (id: string) => string = (id: string) =>
    `/category/${id}`;

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
  static DashboardAnalytics: string = "/dashboard/admin/overview";

  // Api route to invite admin
  static InviteAdmin: string = "/user/invite";

  //Api route to accept invite
  static AcceptInvite: (id: string) => string = (id: string) =>
    `/user/admin/${id}`;

  // Api route to fetch posts
  static FetchPosts: (page: number, limit: string) => string = (
    page: number,
    limit: string
  ) => `/post/all/${page}?limit=${limit}`;

  // Api route to fetch user
  static FetchUsers: (page: number, limit: string, role?: string) => string = (
    page: number,
    limit: string,
    role?: string
  ) => `/user/list/${page}?limit=${limit}${role ? "&role=" + role : ""}`;

  //Api to filter users
  static FilterUsers: (page: number, limit: string, role?: string) => string = (
    page: number,
    limit: string,
    role?: string
  ) => `/user/filter/${page}?limit=${limit}${role ? "&role=" + role : ""}`;

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
    limit: number
  ) => string = (id: string, page: number, limit: number) =>
    `/wallet/earnings/${page}?limit=${limit}&user=${id}`;

  // Api route to submit withdrawal request
  static SubmitWithdrawalRequest: string = "/wallet/withdrawal";

  // Api route to fetch referral network
  static FetchReferralNetwork: string = "/wallet/referral";

  // Api route to fetch referral network
  static FetchFaq: string = "/faq";

  // Api route to fetch user profile
  static FetchUserProfile: (id: string) => string = (id: string) =>
    `/user/${id}`;

  // Api route to fetch point history
  static FetchPointHistory: (
    id: string,
    page: number,
    limit: number
  ) => string = (id: string, page: number, limit: number) =>
    `/wallet/points/${page}?limit=${limit}&user=${id}`;

  //Api route to fetch user teams
  static FetchUserTeams: (id: string, page: number, limit: number) => string = (
    id: string,
    page: number,
    limit: number
  ) => `/team/${page}?limit=${limit}&user=${id}`;

  //Api to activate or deactivate users account
  static ActivateDeactivateUser: (id: string) => string = (id: string) =>
    `/user/${id}/deactivate`;

  //Api to fetch user withdrawal history
  static FetchUserWithdrawalHistory: (
    id: string,
    page: number,
    limit: number
  ) => string = (id: string, page: number, limit: number) =>
    `/wallet/withdrawal/${page}?limit=${limit}&user=${id}`;

  //Api to fetch all teams
  static FetchAllTeams: (page: number, limit: number) => string = (
    page: number,
    limit: number
  ) => `/team/${page}?limit=${limit}`;

  //Api to fetch team details
  static FetchTeamDetails: (id: string) => string = (id: string) =>
    `/team/${id}/view`;

  //Api to fetch challenges
  static FetchChallenges: (page: number, limit: number) => string = (
    page: number,
    limit: number
  ) => `/challenge/list/${page}?limit=${limit}`;

  //Api to fetch challenge details
  static FetchChallengeDetails: (id: string) => string = (id: string) =>
    `/challenge/${id}`;

  //Api to fetch alerts
  static FetchAlerts: (
    page: number,
    limit: number,
    type?: string,
    target?: string,
    status?: string
  ) => string = (
    page: number,
    limit: number,
    type?: string,
    target?: string,
    status?: string
  ) =>
    `/alerts/filter/${page}?limit=${limit}${type ? `&type=${type}` : ""}${
      target ? `&target=${target}` : ""
    }${status ? `&status=${status}` : ""}`;

  //Api to fetch alert by id
  static FetchAlertById: (id: string) => string = (id: string) =>
    `/alerts/${id}`;

  //Api to fetch post by id
  static FetchPostById: (id: string) => string = (id: string) => `/post/${id}`;

  //Api to fetch comment by post id
  static FetchCommentByPostId: (
    id: string,
    page: number,
    limit: number
  ) => string = (id: string, page: number, limit: number) =>
    `/post/${id}/comment/${page}?limit=${limit}`;

  //Api to submit message
  static SendMessage: string = "/message";

  //Api to fetch messages
  static FetchMessages: (
    page: number,
    limit: number,
    published?: boolean,
    status?: string
  ) => string = (
    page: number,
    limit: number,
    published?: boolean,
    status?: string
  ) =>
    `/message/list/${page}?limit=${limit}${
      published ? "&published=" + published : ""
    }${status ? "&status=" + status : ""}`;

  //Api to fetch message by id
  static FetchMessageById: (id: string) => string = (id: string) =>
    `/message/${id}`;

  //Api to fetch blog
  static FetchBlog: (
    page: number,
    limit: number,
    published?: boolean
  ) => string = (page: number, limit: number, published?: boolean) =>
    `/blog/list/${page}?limit=${limit}${
      published ? "&published=" + published : ""
    }`;

  //Api to submit blog
  static SubmitBlog: string = `/blog`;

  //Api to fetch blog by id
  static FetchBlogById: (id: string) => string = (id: string) => `/blog/${id}`;

  //Api to toggle publish
  static TogglePublish: (id: string) => string = (id: string) =>
    `/blog/${id}/publish`;

  //Api to fetch opportunities
  static FetchOpportunities: (page: number, limit: number) => string = (
    page: number,
    limit: number
  ) => `/opportunity/list/${page}?limit=${limit}`;

  //Api to submit opportunity
  static SubmitOpportunity: string = `/opportunity`;

  //Api to fetch opportunity by id
  static FetchOpportunityId: (id: string) => string = (id: string) =>
    `/opportunity/${id}`;

  //Api to toggle publish
  static TogglePublishOpportunity: (id: string) => string = (id: string) =>
    `/opportunity/${id}/publish`;

  //Api to fetch events
  static FetchEvents: (
    page: number,
    limit: number,
    eventDate?: string,
    status?: string,
    published?: boolean
  ) => string = (
    page: number,
    limit: number,
    eventDate?: string,
    status?: string,
    published?: boolean
  ) =>
    `/event/list/${page}?limit=${limit}${
      eventDate ? "&eventDate=" + eventDate : ""
    }${status ? "&status=" + status : ""}${
      published ? "&published=" + published : ""
    }`;

  //Api to submit event
  static SubmitEvent: string = `/event`;

  //Api to fetch event by id
  static FetchEventById: (id: string) => string = (id: string) =>
    `/event/${id}`;

  //Api to toggle publish event
  static TogglePublishEvent: (id: string) => string = (id: string) =>
    `/event/${id}/publish`;

  //Api to fetch learning
  static FetchLearning: (
    page: number,
    limit: number,
    published?: boolean,
    location?: string
  ) => string = (
    page: number,
    limit: number,
    published?: boolean,
    location?: string
  ) =>
    `/course/list/${page}?limit=${limit}${
      published ? "&published=" + published : ""
    }${location ? "&location=" + location : ""}`;

  //Api to fetch learning by id
  static FetchLearningById: (id: string) => string = (id: string) =>
    `/course/${id}`;

  //Api to toggle publish learning
  static TogglePublishLearning: (id: string) => string = (id: string) =>
    `/course/${id}/publish`;

  //Api to submit course
  static SubmitCourse: string = `/course`;

  //Api to fetch faqs
  static FetchFaqs: string = `/faq`;

  //Api to fetch faq by id
  static FetchFaqById: (id: string) => string = (id: string) => `/faq/${id}`;

  //Api to update general settings
  static UpdateGeneralSettings: (id: string) => string = (id: string) =>
    `/settings/${id}`;

  //Api to fetch settings
  static FetchSettings: (type: string, id: string) => string = (
    type: string,
    id: string
  ) => `settings?type=${type}&scope=${id}`;

  //Api to fetch transaction history
  static FetchTransactionHistory: (
    page: number,
    limit: number,
    id?: string,
    status?: string
  ) => string = (page: number, limit: number, id?: string, status?: string) =>
    `/wallet/transaction/${page}?limit=${limit}${id ? "&user=" + id : ""}${
      status ? "&status=" + status : ""
    }`;

  //Api to fetch transaction details
  static FetchTransactionHistoryById: (id?: string) => string = (id?: string) =>
    `wallet/transaction/details/${id}`;

  //Api admin dashboard payment analytics
  static FetchPaymentAnalytics: string = `/dashboard/admin/payments`;

  //Api to fetch dashboard alert analytics
  static FetchAlertAnalytics: string = `/dashboard/admin/alerts`;

  //Api to fetch merchant plans
  static FetchMerchantPlans: string = `/merchant/plan`;

  //Api to update user role
  static UpdateUserRole: (id: string) => string = (id: string) => `/user/${id}`;
}
