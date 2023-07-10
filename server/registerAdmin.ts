import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { Album } from './src/models/Album';
import { db } from './dataBase';

dotenv.config();

interface IAdminRegister {
  albumName: string;
  albumPassword: string;
}

const registerAdmin = async (admin: IAdminRegister): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(admin.albumPassword, 10);

    // Connect to the database
    await db.authenticate();

    await Album.create({
      albumName: admin.albumName,
      albumPassword: hashedPassword,
      role: 'admin',
    });

    console.log('Admin registered successfully!');
  } catch (error) {
    console.error('Error registering admin:', error);
  } finally {
    // Disconnect from the database
    await db.close();
  }
};

// Read admin credentials from the command line arguments
const [albumName, albumPassword] = process.argv.slice(2);

// Check if username and password are provided
if (!albumName || !albumPassword) {
  console.error('Please provide a username and password');
  process.exit(1);
}

// Call the registerAdmin function with the provided credentials
registerAdmin({ albumName, albumPassword });
