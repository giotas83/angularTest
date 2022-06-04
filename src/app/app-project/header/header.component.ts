import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    public isAuthenticated = false;
    private userSub: Subscription;


    constructor(private dataStorageService: DataStorageService, private authServ: AuthService) {

    }

    ngOnInit(): void {
        this.userSub = this.authServ.userSubj
            .subscribe( (user: User) => {
                this.isAuthenticated = !!user;
            });
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

}

