import { NotFoundException } from '@nestjs/common';
import axios from 'axios';

export async function AccountVerificationService(accountId: string) {
  const account = await axios.get(`http://localhost:4000/account/${accountId}`);
  if(account.status !== 200) {
    return new NotFoundException('User not found');
  }
  return true;
}
