import { User } from './../Models/user.models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private listUsers: User[] =
        [
            {
                id: 1,
                name: 'Sihem',
                age: 24,
                email: 'sihem@gmail.com',
                salary: 2000
            },
            {
                id: 2,
                name: 'rim',
                age: 24,
                email: 'rim@gmail.com',
                salary: 2000
            },
            {
                id: 3,
                name: 'imed',
                age: 26,
                email: 'imed@gmail.com',
                salary: 2500
            },
        ];

    addUser(user: User) {
        user.id = this.listUsers.length;
        this.listUsers.push(user);
    }

    getUserById(id: number) {
        return this.listUsers.find(element => element.id === id);
    }

    updateUser(user: User) {
        this.listUsers[this.listUsers.findIndex(element => element.id === user.id)] = user;
    }

    deleteUser(id: number) {
        this.listUsers.splice(this.listUsers.findIndex(element => element.id === id), 1);
    }

    getUsersList(): User[] {
        return this.listUsers;
    }

}
