export default function getUserByUsername($username) {
    return new Promise((resolve, reject) => {
        resolve({ username: 'username', password: 'password123' });
    });
}