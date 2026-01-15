/*
Write a function that extracts and logs 
the following information:
The app name and version.
The theme and the first language from the settings.
For each user, extract the username, email, 
and the last action they performed, 
renaming these variables to userName, 
userEmail, and lastAction.
Finally, return an array of objects,
each representing a user with the renamed 
and extracted properties.
*/

const appConfig = {
  name: 'MyApp',
  version: '1.0.0',
  settings: {
    theme: 'dark',
    languages: ['en', 'es', 'fr'],
    notifications: { email: true, sms: false, push: true },
  },
  users: [
    {
      id: 1,
      profile: {
        username: 'john_doe',
        email: 'john@example.com',
        preferences: { language: 'en', timezone: 'UTC' },
      },
      activity: {
        lastLogin: '2023-01-15T08:00:00Z',
        actions: ['login', 'view_dashboard', 'logout'],
      },
    },
    {
      id: 2,
      profile: {
        username: 'jane_doe',
        email: 'jane@example.com',
        preferences: { language: 'fr', timezone: 'CET' },
      },
      activity: {
        lastLogin: '2023-01-16T09:00:00Z',
        actions: ['login', 'update_profile', 'view_reports'],
      },
    },
  ],
}

function extractUserInfo(appConfig) {
  // Log the app name and version
  console.log(`App Name: ${appConfig.name}, Version: ${appConfig.version}`)

  // Extract and log the theme and the first language from the settings
  const firstLanguage = appConfig.settings.languages[0]
  console.log(
    `Theme: ${appConfig.settings.theme}, First Language: ${firstLanguage}`
  )

  // Initialize an empty array to hold the transformed user data
  let transformedUsers = []

  // Iterate over each user
  appConfig.users.forEach((user) => {
    // Extract and rename properties
    const userName = user.profile.username
    const userEmail = user.profile.email
    const lastAction = user.activity.actions[user.activity.actions.length - 1] // Assuming we want the last action

    // Create a new object with the renamed and extracted properties
    const transformedUser = {
      userName,
      userEmail,
      lastAction,
    }

    // Add the transformed user object to the array
    transformedUsers.push(transformedUser)
  })

  // Return the array of transformed user objects
  return transformedUsers
}

// Example usage
const transformedUsers = extractUserInfo(appConfig)
console.log(transformedUsers)
