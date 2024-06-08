import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Sidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-[calc(100vh)] w-full divide max-w-[15rem] shadow-none" color="transparent">
            <div className="p-4 pb-0">
                <h1 className="font-semibold text-gray-1">BROWSE</h1>
            </div>
            <List className="w-1/4">
            <Link to="/"><ListItem className="hover:bg-gray-2 w-full">
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="w-5" />
                    </ListItemPrefix>
                    Discover
                </ListItem></Link>
            </List>
            <div className="p-4 py-0">
            <hr className="my-2 border-gray-1 pb-4" />
                <h1 className="font-semibold text-gray-1">YOUR BOOKS</h1>
            </div>
            <List>
            <Link to="/my_bookshelf"><ListItem className="hover:bg-gray-2">
                    <ListItemPrefix>
                        <InboxIcon className="w-5" />
                    </ListItemPrefix>
                    My BookShelf
                </ListItem></Link>
            </List>
            
        </Card>
    );
}