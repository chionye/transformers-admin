import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import CustomButton from "./buttons/custom-button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  private handleGoHome = () => {
    window.location.href = "/dashboard/admin/home";
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>

              <p className="text-gray-600 mb-6">
                We encountered an unexpected error. Don't worry, we've logged
                the issue and will look into it.
              </p>

              <div className="w-full bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Error Details:
                </p>
                <p className="text-sm text-red-600 font-mono break-words">
                  {this.state.error?.message || "Unknown error"}
                </p>

                {process.env.NODE_ENV === "development" && this.state.errorInfo && (
                  <details className="mt-4">
                    <summary className="text-sm font-semibold text-gray-700 cursor-pointer hover:text-gray-900">
                      Stack Trace (Development Only)
                    </summary>
                    <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-40 p-2 bg-white rounded border">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <CustomButton
                  onClick={this.handleReset}
                  variant="outline"
                  className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </CustomButton>

                <CustomButton
                  onClick={this.handleReload}
                  variant="outline"
                  className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </CustomButton>

                <CustomButton
                  onClick={this.handleGoHome}
                  className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go to Home
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
