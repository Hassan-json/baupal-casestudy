import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as dotenv from 'dotenv';
import { SignUpService } from '../services/signUpService';

// Load environment variables
dotenv.config();

// Define test suite
describe('SignUpService', () => {
  it('should sign up user with valid email', async () => {
    const signUpService = new SignUpService(process.env.API_HOST, process.env.API_Email);

    const result = await signUpService.signUp(email, password);

    // Assert
    expect(result.success).to.be.true;
    expect(result.message).to.equal('User signed up successfully');
  });
});