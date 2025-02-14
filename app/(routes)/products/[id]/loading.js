export default function Loading() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 w-48 mb-8 rounded" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl" />
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-gray-200 dark:bg-gray-700 rounded" />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 w-3/4 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-48 rounded" />
              <div className="h-8 bg-gray-200 dark:bg-gray-700 w-32 rounded" />
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }