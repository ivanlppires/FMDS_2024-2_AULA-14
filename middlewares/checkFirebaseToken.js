import admin from 'firebase-admin';

const checkFirebaseToken = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Token não informado' });
    }

    const token = req.headers.authorization.split('Bearer ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token não informado' });
    }
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);

        req.user = decodedToken;
        next();
    } catch (error) {

        console.error(error);

        return res.status(401).json({ error: 'Token inválido' });
    }
}
export default checkFirebaseToken;