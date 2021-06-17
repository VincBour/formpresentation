import React from "react"
import { Route, Switch } from "react-router-dom"
import { ClassicForm } from "../classicForm/ClassicForm"
import { ErrorPage } from "../error/ErrorPage"
import { FormGeneratorComponent } from "../formGenerator/FormGenerator"
import { TalentsoftForm } from "../forms/TalentsoftForm"
import { Home } from "../home/Home"
import { ManageFields } from "../manageFields/ManageFields"
import { Thanks } from "../thanks/Thanks"

export const SwitchNav = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/classicForm' exact>
                <ClassicForm />
            </Route>
            <Route path='/talentsoftForm'>
                <TalentsoftForm />
            </Route>
            <Route path='/formGenerator'>
                <FormGeneratorComponent />
            </Route>
            <Route path='/manage'>
                <ManageFields />
            </Route>
            <Route path='/thanks'>
                <Thanks />
            </Route>
            <Route path='/*'>
                <ErrorPage />
            </Route>
        </Switch>
    )
}